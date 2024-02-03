---
title: Parquet.Document
---

# Parquet.Document


## Description

A Parquet-dokumentum tartalmát adja vissza táblaként.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

A Parquet-dokumentum tartalmát adja vissza táblázatként. A lehetőségek a következők:
    <ul>
    <li> <code>TypeMapping</code>: A fájlok olvasása és írása során az alapértelmezett típusleképezést szabályozó szöveges érték. Az alapértelmezett érték null, és a lehető legtöbb hűséget próbálja megőrizni az eredeti típushoz. Az Sql érték adja az Sql Server-rel leginkább kompatibilis eredményeket.</li>
    </ul>



## Category
Adatok elérése
