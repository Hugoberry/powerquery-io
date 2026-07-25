---
title: Mbtiles.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Mbtiles.Document

<DriverlessBanner />

Returns a navigation table of the tiles and metadata in an MBTiles tileset.

## Syntax

```powerquery
Mbtiles.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

MBTiles is the standard single-file container for a map tileset, and like
GeoPackage it is SQLite underneath. This function reads it without GDAL or a
tile server.

The navigation table holds `Metadata` and `Tiles` entries, plus `grids` tables
when the tileset carries UTFGrid data.

The `Tiles` table keeps `zoom_level`, `tile_column` and `tile_row` exactly as
stored — which is TMS row order, per the MBTiles spec — and adds a computed
`tile_row_xyz` column (`2^zoom - 1 - tile_row`) for XYZ/web-mercator consumers,
because getting that flip wrong is the classic MBTiles bug.

:::note Needs `Sqlite3.Database`
An MBTiles file is a SQLite database, so this reader calls
[`Sqlite3.Database`](sqlite3.database.md). If you are pasting the source, paste
both and name the second query exactly `Sqlite3.Database`. `PQDriverless.mez`
contains both already.
:::

Options:

-   `DecompressTiles` : A logical (true/false), default null meaning auto.
    MBTiles vector tiles (`format=pbf`) are stored gzip-compressed; auto detects
    the gzip signature per tile and decompresses. True forces decompression and
    errors on a tile that isn't gzip; false leaves every tile untouched.
-   `MaxRows` : A number. Return at most this many tile rows.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — a missing metadata table, or a gzip tile that fails to decompress
    (default is false).

## Examples

### Example #1
Read the tileset's metadata.
```powerquery
let
    Ts = Mbtiles.Document(File.Contents("C:\data\world.mbtiles"))
in
    Ts{[Name = "Metadata"]}[Data]
```

### Example #2
Count tiles per zoom level — a quick way to see how a tileset was built.
```powerquery
let
    Ts    = Mbtiles.Document(File.Contents("C:\data\world.mbtiles")),
    Tiles = Ts{[Name = "Tiles"]}[Data]
in
    Table.Group(Tiles, {"zoom_level"}, {{"Tiles", Table.RowCount, Int64.Type}})
```

## Supported

The plain `tiles` table layout (MBTiles 1.x); the deduplicated tippecanoe layout
(`map` + `images` tables behind a `tiles` view, joined here in M); raster
(png/jpg/webp) and vector (pbf) tile data; UTFGrid `grids` / `grid_data` tables
when present. SQLite-level support and limits are those of
[`Sqlite3.Database`](sqlite3.database.md).

## Not supported

-   `tiles` views other than the `map` + `images` layout — clear error.

Integer cells decode exactly across the full signed 64-bit range, inherited from
`Sqlite3.Database`; downstream M arithmetic may still coerce past
2<sup>53</sup>.

## Metadata

`Mbtiles.Metadata` (the tileset's key-value pairs as a record), `Mbtiles.Format`,
`Mbtiles.Name`.

## Category
Driverless connectors
