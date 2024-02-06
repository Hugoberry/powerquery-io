---
title: Hdfs.Files
---

# Hdfs.Files


Zwraca tabelę zawierającą właściwości i zawartość plików znalezionych w określonym folderze i jego podfolderach w systemie plików usługi Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu plikowi znalezionemu pod adresem URL folderu <code>url</code> i w jego podfolderach w systemie plików usługi Hadoop. Każdy wiersz zawiera właściwości pliku oraz link do jego zawartości.



## Category
Accessing data
