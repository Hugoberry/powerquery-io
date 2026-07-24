---
title: Codec.Decompress
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Codec.Decompress

<DriverlessBanner />

Decompresses Snappy, Brotli, Zstandard, LZ4, GZip and Deflate streams — a
drop-in superset of [`Binary.Decompress`](/binary/binary.decompress).

## Syntax

```powerquery
Codec.Decompress(
    compressed as binary,
    compression as number,
    optional uncompressedSize as number,
    optional options as record
) as binary
```

## Remarks

`Binary.Decompress` implements exactly two of the seven members of
`Compression.Type`: `GZip` and `Deflate`. Ask it for Snappy, Brotli, LZ4 or
Zstandard and it fails at runtime, even though the enum declares them.

The engine contains all of those codecs anyway — `Parquet.Document` uses them
every time it reads a compressed Parquet file. `Codec.Decompress` makes them
callable from plain M by wrapping an arbitrary compressed stream in a minimal,
spec-conformant Parquet file and letting `Parquet.Document` do the work: one
`REQUIRED FIXED_LEN_BYTE_ARRAY` column, one row, PLAIN encoding, which is the
one point in Parquet's design space where the uncompressed data page is exactly
the payload bytes. The compressed page can therefore be your stream, byte for
byte, with no re-encoding.

GZip and Deflate route straight to `Binary.Decompress`; `Compression.None`
returns the input unchanged.

The wrapper must declare the decompressed size, so the function reads it out of
the stream itself:

| `Compression.Type` | Wire format expected | Where the size comes from |
|---|---|---|
| `Compression.Snappy` | raw snappy block | preamble varint |
| `Compression.Brotli` | raw brotli stream | first meta-block MLEN |
| `Compression.Zstandard` | zstd frame | frame content size, when declared |
| `Compression.LZ4` | raw block or hadoop-framed, auto-detected | hadoop header, or a token walk over the sequences |
| `Compression.GZip` | gzip stream | not needed (native path) |
| `Compression.Deflate` | raw deflate | not needed (native path) |
| `Compression.None` | anything | returned unchanged |

Two streams can genuinely withhold their size, and both raise a clear error
asking for an explicit `uncompressedSize`: a zstd frame written without the
optional content-size field, and a brotli stream the encoder split across
several meta-blocks (typically inputs beyond a couple of MB). A wrong size can
never corrupt the output — the Parquet reader checks it and fails loudly.

Options:

-   `LZ4Framing` : Text, `"Auto"` (default), `"Raw"` or `"Hadoop"`. Forces the
    LZ4 framing instead of detecting it from the stream.
-   `ReturnWrapper` : A logical (true/false). Return the generated Parquet bytes
    instead of parsing them, for byte-level debugging (default is false).

## Examples

### Example #1
Decompress a snappy block.
```powerquery
Codec.Decompress(File.Contents("C:\data\block.snappy"), Compression.Snappy)
```

### Example #2
Zstandard, where the frame doesn't declare its content size.
```powerquery
Codec.Decompress(blob, Compression.Zstandard, 1048576)
```

### Example #3
Force a raw LZ4 framing rather than letting detection decide.
```powerquery
Codec.Decompress(blob, Compression.LZ4, null, [LZ4Framing = "Raw"])
```

## Not supported

Framed container formats are not handled directly. A snappy framing-format file
(`sNaPpY` magic) or an LZ4 frame is a sequence of blocks with chunk headers;
split the frame with ordinary M byte work and feed each block through
`Codec.Decompress`.

Codec availability is a property of the host, not of this function. It has been
verified in Power BI Desktop; the companion `Codec.Probe` function runs a
fixture matrix against whichever host you point it at, so you can confirm
Service refresh, Excel or Dataflows Gen2 for yourself before depending on it.

## Category
Driverless connectors
