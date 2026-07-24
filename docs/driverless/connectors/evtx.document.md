---
title: Evtx.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Evtx.Document

<DriverlessBanner />

Returns the events in a Windows XML Event Log file (`.evtx`) as a table.

## Syntax

```powerquery
Evtx.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

An `.evtx` file is not XML on disk. It is a chunked container of *binary* XML
built on per-chunk template definitions with back-references and typed
substitution values, which is why reading one normally means the Windows Event
Log API, a SIEM, or a compiled parser. This function decodes the format
directly, from a plain binary — so a log copied off an incident machine reads in
Power BI with nothing installed, on any host.

One row per event, with the System fields already extracted into columns:
`RecordId`, `TimeCreated`, `Provider`, `EventId`, `Level`, `LevelName`, `Task`,
`Opcode`, `Keywords`, `Channel`, `Computer`, `ProcessId`, `ThreadId`, `UserId`,
`EventData` (a record of the event's payload fields) and `Xml` (the rendered
event XML).

Options:

-   `IncludeXml` : A logical (true/false). Emit the rendered XML of every event
    in the `Xml` column (default is true). Set false to skip rendering when only
    the extracted columns are needed — noticeably faster on large logs.
-   `Encoding` : A `TextEncoding.Type` or codepage number for AnsiString (type
    `0x02`) values, default Windows-1252. Unicode strings are unaffected.
-   `MaxRows` : A number. Stop after this many events.
-   `Strict` : A logical (true/false). Default false, which is what makes a
    dirty log readable: records that fail to parse are skipped and counted in
    `Evtx.SkippedRecords`, and chunks with bad signatures are ignored. True makes
    any malformation an error.

## Examples

### Example #1
Read a log, skipping XML rendering for speed.
```powerquery
Evtx.Document(File.Contents("C:\logs\Security.evtx"), [IncludeXml = false])
```

### Example #2
Failed logons by account, from the raw log.
```powerquery
let
    Events = Evtx.Document(File.Contents("C:\logs\Security.evtx"), [IncludeXml = false]),
    Failed = Table.SelectRows(Events, each [EventId] = 4625),
    Named  = Table.AddColumn(Failed, "Account", each [EventData][TargetUserName]?)
in
    Table.Group(Named, {"Account"}, {{"Attempts", Table.RowCount, Int64.Type}})
```

### Example #3
Check whether anything was lost before trusting a count. A log recovered from a
crashed machine can parse happily and still be missing records.
```powerquery
let
    Events = Evtx.Document(File.Contents("C:\logs\Security.evtx")),
    Meta   = Value.Metadata(Events)
in
    [ Dirty = Meta[Evtx.IsDirty], Skipped = Meta[Evtx.SkippedRecords] ]
```

## Supported

EVTX versions 3.1 and 3.2 (Windows Vista through current); binary XML templates,
resident and back-referenced, and nested binary XML values; every documented
substitution value type — strings, integers, floats, boolean, binary, GUID,
FILETIME, SYSTEMTIME, SID, hex32/64, size_t, Unicode string arrays; dirty files,
where chunks are found by signature scan rather than the header count and record
recovery stops at the first corrupt record in a chunk; records outside any
template (raw fragments).

## Not supported

-   Legacy `.evt` files — an entirely different format, clear error.
-   CRC32 checksum verification. Checksums are ignored; corruption surfaces as
    skipped records instead.
-   Carving records out of chunk slack space.

64-bit integer values beyond 2<sup>53</sup> lose precision. FILETIME timestamps
decode exactly to the 100 ns tick.

## Metadata

`Evtx.Version`, `Evtx.IsDirty`, `Evtx.IsFull`, `Evtx.NextRecordId`,
`Evtx.ChunkCount`, `Evtx.DeclaredChunkCount`, `Evtx.SkippedRecords`.

## Category
Driverless connectors
