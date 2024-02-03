---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Ustvari zapis, ki predstavlja geografsko točko iz delov.


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

Ustvari zapis, ki predstavlja geografsko točko iz njegovih sestavnih delov, kot so zemljepisna dolžina, zemljepisna širina ter nadmorska višina (Z) in mera (M), če sta prisotni. Izbirni prostorski referenčni identifikator (SRID) je mogoče navesti, če se razlikuje od privzete vrednosti (4326).



## Category
Record.Serialization
