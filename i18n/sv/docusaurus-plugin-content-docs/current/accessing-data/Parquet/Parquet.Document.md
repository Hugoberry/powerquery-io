---
title: Parquet.Document
---

# Parquet.Document


Returnerar innehållet i Parquet-dokumentet som en tabell.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Returnerar innehållet i Parquet-dokumentet som en tabell. Alternativen är:    <ul>    <li> <code>TypeMapping</code>: Ett textvärde som styr standardtypmappningen vid läsning och skrivning av filer. Standardvärdet är null och försöker bevara så mycket återgivning som möjligt för den ursprungliga typen. Värdet "Sql" ger resultat som är mest kompatibla med Sql Server.</li>    </ul>



## Category
Öppnar data
