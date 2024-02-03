---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Hiermee wordt een record gemaakt die een geografisch punt op basis van onderdelen aangeeft.


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

Hiermee wordt een record gemaakt die een geografisch punt aangeeft op basis van de samenstellende onderdelen, zoals lengtegraad, breedtegraad en, indien aanwezig, hoogte (Z) en meting (M). Er kan een optionele ruimtelijke referentie-id (SRID) worden opgegeven als deze afwijkt van de standaardwaarde (4326).



## Category
Record.Serialization
