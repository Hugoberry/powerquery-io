---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Nolasa bināro straumi un mēģina noteikt straumes satura tipu un formāta informāciju.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Atgriež ierakstu ar lauku Content.Type, kas satur izsecināto MIME-type.    Ja izsecinātais satura tips ir text/\* un ir noteikta kodēšanas kodu lapa, papildus atgriež lauku Content.Encoding, kas satur straumes kodēšanu.    Ja izsecinātais satura tips ir text/csv un formāts ir atdalītu vērtību formāts, papildus atgriež lauku Csv.PotentialDelimiter, kas satur tabulu iespējamo atdalītāju analīzei.    Ja izsecinātais satura tips ir text/csv un formāts ir fiksēta platuma formāts, papildus atgriež lauku Csv.PotentialPositions, kas satur sarakstu iespējamo fiksētā platuma kolonnu pozīciju analīzei.



## Category
Binary
