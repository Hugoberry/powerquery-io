---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Zwraca tabelę zawierającą właściwości i zawartość plików oraz folderów znalezionych w określonym folderze w systemie plików usługi Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Zwraca tabelę zawierającą wiersz odpowiadający każdemu folderowi i plikowi znalezionemu pod adresem URL folderu <code>url</code> w systemie plików usługi Hadoop. Każdy wiersz zawiera właściwości folderu lub pliku oraz link do ich zawartości.



## Category
Accessing data
