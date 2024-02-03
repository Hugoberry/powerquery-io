---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Vytvoří záznam reprezentující geografický bod ze součástí.


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

Vytvoří záznam reprezentující geografický bod ze součástí, jako jsou zeměpisná délka, zeměpisná šířka a pokud existují, nadmořská výška (Z) a míra (M). Pokud se liší od výchozí hodnoty (4326), můžete uvést nepovinný identifikátor prostorové reference (SRID).



## Category
Record.Serialization
