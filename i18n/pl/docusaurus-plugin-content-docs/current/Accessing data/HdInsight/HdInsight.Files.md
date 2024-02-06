---
title: HdInsight.Files
---

# HdInsight.Files


Zwraca tabelę z właściwościami i zawartością obiektów blob znalezionych w określonym kontenerze z magazynu systemu Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz każdego pliku blob znalezionego pod adresem URL kontenera (<code>account</code>) z magazynu systemu Azure. Każdy wiersz zawiera właściwości pliku i link do jego zawartości.



## Category
Accessing data
