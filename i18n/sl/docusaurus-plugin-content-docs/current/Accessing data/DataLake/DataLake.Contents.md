---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Vnesite URL svojega računa za Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje vrstico za vsako mapo in datoteko, najdeno na naslovu <code>url</code> v storitvi Azure Data Lake Storage Gen1. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do njene vsebine.


