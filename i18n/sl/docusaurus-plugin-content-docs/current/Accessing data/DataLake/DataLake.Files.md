---
title: DataLake.Files
---

# DataLake.Files


## Description

Vnesite URL svojega računa za Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje vrstico za vsako datoteko, najdeno na naslovu <code>url</code> v storitvi Azure Data Lake Storage Gen1. Vsaka vrstica vsebuje lastnosti datoteke in povezavo do njene vsebine.


