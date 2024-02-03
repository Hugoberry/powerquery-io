---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Vytvorí záznam reprezentujúci geometrický bod zo súčastí.


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

Vytvorí záznam reprezentujúci geometrický bod zo zástupných súčastí, ako napríklad súradnica na osi X, súradnica na osi Y a ak je prítomná, súradnica na osi Z a mierka (M). Ak sa líši od predvolenej hodnoty (0), môžete uviesť voliteľný identifikátor referenčného súradnicového systému (SRID).



## Category
Record.Serialization
