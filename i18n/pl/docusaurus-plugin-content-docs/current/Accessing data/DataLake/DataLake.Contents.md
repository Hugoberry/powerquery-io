---
title: DataLake.Contents
---

# DataLake.Contents


Wprowadź adres URL konta usługi Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz dla każdego folderu i pliku znalezionego w adresie <code>url</code> z usługi Azure Data Lake Storage Gen1. Każdy wiersz zawiera właściwości folderu lub pliku i link do jego zawartości.


