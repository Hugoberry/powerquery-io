---
title: Where it runs, what to expect
sidebar_position: 3
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Where it runs, what to expect

<DriverlessBanner />

## Hosts

The connectors are standard-library M, so they run wherever M runs: Power BI
Desktop, Excel, Power BI dataflows, Dataflows Gen2 and Power BI Service refresh.

The distinction that matters is *how* you delivered them:

- **Pasted source travels with the query.** It is part of the query text, so it
  goes wherever the query goes — including a Service refresh with no gateway,
  when the file itself is Service-reachable.
- **`PQDriverless.mez` is a custom connector**, and custom connectors follow the
  usual custom-connector rules: fine on the Desktop and in Excel, but a Service
  refresh needs an on-premises data gateway configured to allow custom data
  connectors. If your goal is gateway-free refresh in the Service, paste the
  source.

## Performance

Decoding in interpreted M is slower than a compiled driver. That is the price of
having no driver, and how much it costs depends almost entirely on file size.

**Small and typical files** — the size most ad-hoc imports actually are — the
gap is usually sub-second and often invisible. A native ODBC driver spends
roughly a second just standing up its connection, which swamps the decode either
way. Against the ACE Excel, Access and dBASE drivers, the pure-M readers land
between parity and a few times slower, and the dBASE reader is a dead heat.

**Large files** — native decoders pull ahead as per-row cost takes over: roughly
**2-15x** against ODBC drivers such as SQLite and ACE, and considerably more
against mature compiled libraries, up to a couple of hundred times for the Rust-
and GDAL-backed formats (EVTX, GeoPackage) that have no ODBC driver to compare
against in the first place.

So choose by size and setting, not by a headline number. For a one-off or a
modest file, the driverless reader is the easy call — nothing to install, and it
runs where a driver cannot. For repeated decode of a large file on a machine
that *can* carry the toolchain, a native driver is the faster tool and there is
no shame in using it.

`MaxRows` exists for exactly this: it stops the decode rather than trimming the
result, so exploring a large unfamiliar file stays cheap.

Full method and per-format numbers are in the
[performance report](https://github.com/Hugoberry/powerquery-driverless/blob/main/tests/perf/REPORT.md).

## Numeric precision

M numbers are IEEE doubles, so an integer beyond 2<sup>53</sup> cannot be held
exactly. Where a format stores 64-bit integers, that limit is inherited: Avro
longs, Access Big Integer, EVTX 64-bit values, dBASE currency and MATLAB
`int64`/`uint64` all lose precision past that point.

`Sqlite3.Database` is the exception on the decode side — it decodes integer
serial types exactly across the full signed 64-bit range — but downstream M
arithmetic on those values can still coerce them to double. If you need exact
large integers end to end, carry them as text.

Excel serial numbers convert to `datetime` at sub-millisecond precision, and the
workbook readers reproduce Excel's own quirks deliberately: serials 1-59 use the
epoch that makes displayed dates match Excel (the Lotus leap-year bug), and the
fictitious 1900-02-29 becomes 1900-03-01.

## Correctness, versus the drivers

Being driverless is the headline, but for the spreadsheet formats these readers
are also simply more *right*. ACE infers a column's type from the first several
rows and nulls out everything that disagrees with its guess — the classic
"my column of mostly-numbers lost all its text values" bug. These readers decode
every cell from its own record type, so a mixed column comes back mixed rather
than silently damaged.

The same discipline applies elsewhere: deleted dBASE records are excluded unless
you ask for them, SPSS user-missing values stay distinguishable from
system-missing, and Stata's extended missing codes `.a`-`.z` survive as
something you can act on rather than collapsing into null.

## Limits worth knowing before you start

Each connector page lists what it doesn't support, in detail and without
hedging. The ones that most often matter:

- **Encrypted or password-protected files** are detected and refused, never
  half-read. That covers Access, `.xls` and dBASE.
- **A format's newest container is sometimes a different format.** MATLAB v7.3
  files are HDF5 and are refused with a clear error (re-save with `save -v7`);
  Access 97 and Stata 7 files are likewise a different layout, not a variant.
- **SQLite `-wal` files are not read.** Un-checkpointed data in a write-ahead log
  is invisible to the reader, which sees the main database file only.
- **Live formula evaluation doesn't happen.** The workbook readers return the
  cached result Excel stored, which is what you want for reporting and is not
  what you want if the file was written by something that didn't populate the
  cache.
