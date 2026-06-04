---
title: DataLake.Contents
---

# DataLake.Contents


Vnesite URL svojega računa za Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako mapo in datoteko, najdeno na naslovu `url` v storitvi Azure Data Lake Storage Gen1. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do njene vsebine.


