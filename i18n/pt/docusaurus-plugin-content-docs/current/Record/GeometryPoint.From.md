---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Creates a record representing a geometric point from parts.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Creates a record representing a geometric point from its constituent parts, such as X coordinate, Y coordinate, and if present, Z coordinate and measure (M). An optional spatial reference identifier (SRID) can be given if different from the default value (0).



## Category
Record.Serialization
