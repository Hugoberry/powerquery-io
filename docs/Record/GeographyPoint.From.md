---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Creates a record representing a geographic point from parts.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Creates a record representing a geographic point from its constituent parts, such as longitude, latitude, and if present, elevation (Z) and measure (M). An optional spatial reference identifier (SRID) can be given if different from the default value (4326).



## Category
Record.Serialization
