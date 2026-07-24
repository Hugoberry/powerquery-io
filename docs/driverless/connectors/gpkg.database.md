---
title: Gpkg.Database
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Gpkg.Database

<DriverlessBanner />

Returns a navigation table of the layers in an OGC GeoPackage (`.gpkg`).

## Syntax

```powerquery
Gpkg.Database(
    source as binary,
    optional options as record
) as table
```

## Remarks

A GeoPackage is the OGC's standard container for vector features, attributes and
tiles, and it is a SQLite database underneath. Reading one usually means GDAL or
a spatial ODBC driver. This function reads the SQLite container and decodes the
GeoPackageBinary geometry blobs, returning geometry as **WKT by default —
the form Power BI's map visuals consume**, so a layer lands in a map without an
intermediate step.

One row per `gpkg_contents` entry.

:::note Needs `Sqlite3.Database`
A GeoPackage is a SQLite database, so this reader calls
[`Sqlite3.Database`](sqlite3.database.md) rather than embedding a second copy of
the b-tree parser. If you are pasting the source, paste both and name the second
query exactly `Sqlite3.Database`. `PQDriverless.mez` contains both already.
:::

Options:

-   `GeometryFormat` : Text, default `"WKT"`. How geometry columns come back —
    `"WKT"` (well-known text), `"WKB"` (raw ISO well-known binary with the
    GeoPackageBinary header stripped), or `"GeoPackageBinary"` (the blob
    untouched).
-   `IncludeSystemTables` : A logical (true/false). Also list the `gpkg_*`
    catalog tables (default is false).
-   `MaxRows` : A number. Return at most this many rows per table.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors; by default an undecodable geometry blob returns null (default is
    false).

## Examples

### Example #1
Read a layer, geometry as WKT.
```powerquery
let
    Gp    = Gpkg.Database(File.Contents("C:\data\boundaries.gpkg")),
    Layer = Gp{[Name = "admin_areas"]}[Data]
in
    Layer
```

### Example #2
Check which spatial reference system a layer uses before mapping it.
```powerquery
let
    Gp    = Gpkg.Database(File.Contents("C:\data\boundaries.gpkg")),
    Layer = Gp{[Name = "admin_areas"]}[Data]
in
    Value.Metadata(Layer)[Gpkg.SrsId]
```

## Supported

Features, attributes and tiles tables listed in `gpkg_contents`; all ISO WKB
geometry types — Point, LineString, Polygon, MultiPoint, MultiLineString,
MultiPolygon and GeometryCollection — in XY, Z, M and ZM dimensions;
per-geometry and per-header byte order, both endiannesses; all envelope
indicators; empty and null geometries. SQLite-level support and limits are those
of [`Sqlite3.Database`](sqlite3.database.md).

## Not supported

-   Extension-defined GeoPackageBinary payloads and EWKB — null by default, a
    clear error under `Strict`.
-   Features registered as SQL views — a clear error per entry.
-   R-tree spatial index internals, which are deliberately hidden.

Integer cells decode exactly across the full signed 64-bit range, inherited from
`Sqlite3.Database`; downstream M arithmetic may still coerce past
2<sup>53</sup>.

## Metadata

On the navigation table: `Gpkg.ApplicationId`, `Gpkg.UserVersion`. On each
feature table: `Gpkg.SrsId`, `Gpkg.DataType`, `Gpkg.Description`.

## Category
Driverless connectors
