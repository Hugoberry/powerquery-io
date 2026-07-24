---
title: Avro.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Avro.Document

<DriverlessBanner />

Returns the records of an Apache Avro Object Container File as a table.

## Syntax

```powerquery
Avro.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

Avro is what Azure Event Hubs and IoT Hub Capture write, so `.avro` files
accumulate in Blob storage in front of a lot of Power BI users who then need
Java, Spark or a Databricks cluster to read them. This function decodes the
Object Container File format directly, including the compression codecs.

The result is one column per field of the top-level record, or a single `Value`
column when the schema isn't a record.

Event Hubs Capture files wrap the actual payload in a `Body` bytes field. It is
decoded as UTF-8 text by default; `ParseBodyAsJson` expands it instead.

Options:

-   `ParseBodyAsJson` : A logical (true/false). Parse a top-level `Body` bytes
    field with `Json.Document`, falling back to text when the payload isn't JSON
    unless `Strict = true` (default is false).
-   `KeepBodyBinary` : A logical (true/false). Leave `Body` as raw bytes
    (default is false).
-   `Encoding` : A `TextEncoding.Type` for the default `Body`-to-text decode
    (default is `TextEncoding.Utf8`).
-   `MaxRows` : A number. Stop after this many rows; later blocks are not
    decoded at all.
-   `Strict` : A logical (true/false). When true, normally-tolerated malformed
    input becomes an error — a non-JSON `Body` under `ParseBodyAsJson`, or
    trailing bytes inside a data block (default is false).

## Examples

### Example #1
Read a file.
```powerquery
Avro.Document(File.Contents("C:\data\events.avro"))
```

### Example #2
Read an Event Hubs Capture file and expand the JSON payload.
```powerquery
let
    Blobs   = AzureStorage.Blobs("https://contoso.blob.core.windows.net/capture"),
    Avros   = Table.SelectRows(Blobs, each Text.EndsWith([Name], ".avro")),
    Decoded = Table.AddColumn(Avros, "Events",
                  each Avro.Document([Content], [ParseBodyAsJson = true]))
in
    Decoded
```

### Example #3
Inspect the writer schema embedded in the file.
```powerquery
let
    T = Avro.Document(File.Contents("C:\data\events.avro"))
in
    Value.Metadata(T)[Avro.Schema]
```

## Supported

Codecs `null`, `deflate`, `snappy` and `zstandard`; all primitive types;
records, enums, arrays, maps, unions and fixed; named type references including
recursive schemas; the logical types `decimal`, `date`, `time-millis`,
`time-micros`, `timestamp-millis`, `timestamp-micros`,
`local-timestamp-millis`, `local-timestamp-micros`, `uuid` and `duration`;
multi-block files; Event Hubs Capture `Body` unwrapping.

Snappy and zstandard blocks are decompressed through the same technique as
[`Codec.Decompress`](codec.decompress.md), inlined into the reader, since
`Binary.Decompress` exposes only deflate and gzip. A snappy block's 4-byte
CRC-32 trailer is stripped before decoding, not validated.

## Not supported

-   Codecs `bzip2` and `xz` — the engine has no codec for them, clear error.
-   Schema resolution against a reader schema. The writer schema embedded in the
    file is used.
-   Single-object encoding and raw datum streams. Object Container Files only.

Avro `long` values beyond 2<sup>53</sup> lose precision, as do decimals whose
unscaled value exceeds it.

## Metadata

`Avro.Schema`, `Avro.Codec`.

## Category
Driverless connectors
