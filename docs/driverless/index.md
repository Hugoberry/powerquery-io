---
title: Driverless connectors
sidebar_label: Introduction
sidebar_position: 0
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Driverless connectors

<DriverlessBanner />

In Power BI, the answer to "how do I read this file?" too often starts with
"first, install this driver."

That answer assumes a machine you control. Plenty of people don't have one. The
corporate desktop refuses machine-level installs. The gateway is someone else's
server, and getting a driver onto it is a ticket, an approval and a wait. The
Power BI Service has no machine to install onto at all. So an ordinary file —
one that arrived by email, or has been sitting on a SharePoint site for years —
becomes unreadable, not for any technical reason, but because the only
sanctioned path runs through an install that will never be approved.

The escape hatches don't help much. The Python and R script hosts need a
configured interpreter and rule out some Service refresh scenarios. Custom
connectors can't bundle binaries. Each workaround swaps one dependency for
another.

But these file formats are just bytes in a documented layout, and Power Query
can read bytes. `Binary.Range`, `BinaryFormat.*` and `Binary.Decompress` are
enough to decode a SQLite b-tree, a Jet page, a BIFF record stream or an EVTX
binary-XML template — in M, at query time, with nothing installed.

That is what these connectors are: **plain M source that decodes a binary file
format directly.** Every one of them works in Power BI Desktop, Excel,
dataflows and the Power BI Service. No bitness to match, no
`provider is not registered`.

## The connectors

| Function | Reads | Replaces |
|---|---|---|
| [`Sqlite3.Database`](connectors/sqlite3.database.md) | `.sqlite`, `.db`, `.db3` | SQLite ODBC driver (no native connector exists) |
| [`Gpkg.Database`](connectors/gpkg.database.md) | `.gpkg` (OGC GeoPackage) | GDAL, spatial ODBC |
| [`Mbtiles.Document`](connectors/mbtiles.document.md) | `.mbtiles` | GDAL, a tile server |
| [`AccessReader.Database`](connectors/accessreader.database.md) | `.mdb`, `.accdb` | ACE OLE DB provider |
| [`Dbf.Table`](connectors/dbf.table.md) | `.dbf` + `.fpt`/`.dbt` | Visual FoxPro OLE DB / ODBC driver |
| [`Xls.Workbook`](connectors/xls.workbook.md) | `.xls` (Excel 97-2003) | ACE |
| [`Xlsb.Workbook`](connectors/xlsb.workbook.md) | `.xlsb` | ACE |
| [`Spss.Document`](connectors/spss.document.md) | `.sav`, `.zsav` | SPSS, R, Python |
| [`Stata.Document`](connectors/stata.document.md) | `.dta` (113-119) | Stata, R, Python |
| [`Matlab.Document`](connectors/matlab.document.md) | `.mat` (v5-v7) | MATLAB, Python |
| [`Avro.Document`](connectors/avro.document.md) | `.avro` (OCF) | Java, Spark |
| [`Evtx.Document`](connectors/evtx.document.md) | `.evtx` | Windows Event Log API, a SIEM |
| [`Codec.Decompress`](connectors/codec.decompress.md) | Snappy, Brotli, Zstd, LZ4 streams | the `Binary.Decompress` that was never implemented |
| [`Crc32.Compute`](connectors/crc32.compute.md) | — | M has no hashing at all |

The last two aren't file readers. They're the primitives that make the readers
possible, and they're useful on their own: `Codec.Decompress` reaches the
compression codecs the engine ships but never exposed, and `Crc32.Compute` is
the checksum function M's standard library is missing.

## What it does and doesn't remove

**The driver dependency goes away every time.** That claim holds without
qualification: there is no driver, no provider, no interpreter and no
machine-level install anywhere in the path.

**The gateway goes away only when your file is already somewhere the Service
can reach** — SharePoint, OneDrive, Blob storage, ADLS. If the file sits on an
internal file share, you still need a gateway for network reach. But it is your
existing standard gateway, with nothing special installed on it, which is
usually the difference between a refresh that works and a change request that
doesn't get approved.

## Next

- **[Installing](usage/installing.md)** — paste the source, or load the `.mez`.
- **[Connector syntax](usage/syntax.md)** — one calling convention across every
  connector: the binary source, the options record, navigation tables and
  metadata.
- **[Where it runs and what to expect](usage/expectations.md)** — hosts,
  performance against native drivers, and the precision limits M imposes.

Source, issues and the full per-format documentation live in the
[powerquery-driverless repository](https://github.com/Hugoberry/powerquery-driverless).
Everything is Apache-2.0.
