---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Vytvorí záznam reprezentujúci geografický bod zo súčastí.


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

Vytvorí záznam reprezentujúci geografický bod zo zástupných súčastí, ako napríklad zemepisná dĺžka, zemepisná šírka a ak sú k dispozícii, nadmorská výška (Z) a mierka (M). Ak sa líši od predvolenej hodnoty (4326), môžete uviesť voliteľný identifikátor referenčného súradnicového systému (SRID).



## Category
Record.Serialization
