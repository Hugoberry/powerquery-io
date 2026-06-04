---
title: DataLake.Contents
---

# DataLake.Contents


Introduceți adresa URL a contului dvs. Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel ce conține un rând pentru fiecare folder și fișier găsit la adresa `url`, de la Azure Data Lake Storage Gen1. Fiecare rând conține proprietăți ale folderului sau fișierului și un link la conținutul său.


