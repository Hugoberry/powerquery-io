---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Hiermit wird ein Datensatz erstellt, der einen geografischen Punkt anhand seiner Bestandteile darstellt.


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

Hiermit wird ein Datensatz erstellt, der einen geografischen Punkt anhand seiner Bestandteile darstellt, z. B. Längengrad, Breitengrad und – sofern vorhanden – Höhe über NN (Z) und Maßeinheit (M). Anstelle des Standardwerts (4326) kann eine optionale Raumbezugskennung (SRID) angegeben werden.



## Category
Record.Serialization
