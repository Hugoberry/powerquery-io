---
title: Crc32.Compute
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Crc32.Compute

<DriverlessBanner />

Computes a CRC-32 checksum over a binary value.

## Syntax

```powerquery
Crc32.Compute(
    data as binary,
    optional variant as text,
    optional options as record
) as number
```

## Remarks

M's standard library has no hashing at all, yet binary formats are full of
CRC-32 fields: gzip trailers, zip central directories, PNG chunks, Avro snappy
blocks (a plain CRC-32 of the uncompressed data) and snappy framing-format
chunks (a masked CRC-32C). Without this, those checksums simply go unverified.

The implementation is table-driven — a buffered 256-entry lookup table, one
lookup and three bitwise operations per byte. Every intermediate stays below
2<sup>32</sup> by construction, so correctness never depends on the runtime's
integer conversion behaviour.

Variants: `CRC32` (aliases ISO-HDLC, zlib, gzip, zip, png), `CRC32C` (aliases
Castagnoli, iSCSI, snappy), `JAMCRC`, `BZIP2` and `MPEG2`. Names match
case-insensitively, ignoring `-`, `/`, `_` and spaces.

Options:

-   `SnappyMask` : A logical (true/false). Apply the snappy framing-format mask
    to the result (default is false).

## Examples

### Example #1
The zlib/gzip/zip/PNG polynomial, which is what `variant` defaults to.
```powerquery
Crc32.Compute(File.Contents("C:\data\payload.bin"))
```

### Example #2
Castagnoli, as used by snappy and iSCSI.
```powerquery
Crc32.Compute(data, "CRC32C")
```

### Example #3
A masked CRC-32C, as it appears in a snappy framing-format chunk header.
```powerquery
Crc32.Compute(data, "CRC32C", [SnappyMask = true])
```

### Example #4
Verify a gzip file against the CRC in its own trailer.
```powerquery
let
    Gz       = File.Contents("C:\data\archive.gz"),
    Plain    = Binary.Decompress(Gz, Compression.GZip),
    Stored   = BinaryFormat.ByteOrder(BinaryFormat.UnsignedInteger32, ByteOrder.LittleEndian)(
                   Binary.Range(Gz, Binary.Length(Gz) - 8, 4)),
    Computed = Crc32.Compute(Plain)
in
    Stored = Computed
```

## Category
Driverless connectors
