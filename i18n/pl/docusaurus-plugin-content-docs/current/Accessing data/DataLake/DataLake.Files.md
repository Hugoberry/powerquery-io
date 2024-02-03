---
title: DataLake.Files
---

# DataLake.Files


## Description

Wprowadź adres URL konta usługi Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą wiersz dla każdego pliku znalezionego w adresie <code>url</code> z usługi Azure Data Lake Storage Gen1. Każdy wiersz zawiera właściwości pliku i link do jego zawartości.


