---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Vytvoří záznam reprezentující geometrický bod ze součástí.


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

Vytvoří záznam reprezentující geografický bod ze součástí, jako jsou souřadnice X, souřadnice Y, a pokud existují, souřadnice Z a míra Z (M). Pokud se liší od výchozí hodnoty (0), můžete uvést nepovinný identifikátor prostorové reference (SRID).



## Category
Record.Serialization
