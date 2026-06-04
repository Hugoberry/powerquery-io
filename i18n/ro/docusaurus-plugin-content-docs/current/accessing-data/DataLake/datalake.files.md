---
title: DataLake.Files
---

# DataLake.Files


Introduceți adresa URL a contului dvs. Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel ce conține un rând pentru fiecare fișier găsit la adresa `url`, de la Azure Data Lake Storage Gen1. Fiecare rând conține proprietăți ale fișierului și un link la conținutul său.


