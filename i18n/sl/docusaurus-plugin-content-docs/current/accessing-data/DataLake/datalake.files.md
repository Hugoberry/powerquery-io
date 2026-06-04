---
title: DataLake.Files
---

# DataLake.Files


Vnesite URL svojega računa za Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako datoteko, najdeno na naslovu `url` v storitvi Azure Data Lake Storage Gen1. Vsaka vrstica vsebuje lastnosti datoteke in povezavo do njene vsebine.


