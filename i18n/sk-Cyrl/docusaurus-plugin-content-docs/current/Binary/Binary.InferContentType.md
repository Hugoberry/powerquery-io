---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Číta binárny stream a pokúša sa určiť informácie o type obsahu a formátu streamu.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Vráti záznam s poľom Content.Type, ktorý obsahuje odvodený typ MIME.    Ak je odvodený typ obsahu text/\* a zistí sa kódová stránka kódovania, vráti sa navyše pole Content.Encoding, ktoré obsahuje kódovanie streamu.    Ak je odvodený typ obsahu text/csv a formát používa oddeľovač, vráti sa navyše pole Csv.PotentialDelimiter obsahujúce tabuľku na analýzu potenciálnych oddeľovačov.    Ak je odvodený typ obsahu text/csv a formát má pevnú šírku, vráti navyše pole Csv.PotentialPositions obsahujúce zoznam na analýzu pozícií stĺpcov s potenciálne pevnou šírkou.



## Category
Binary
