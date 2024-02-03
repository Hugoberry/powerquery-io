---
title: Folder.Contents
---

# Folder.Contents


## Description

Zwraca tabelę zawierającą właściwości i zawartość plików oraz folderów znalezionych w określonym folderze.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą wiersz odpowiadający każdemu folderowi i plikowi znalezionemu w folderze <code>path</code>. Każdy wiersz zawiera właściwości folderu lub pliku oraz link do ich zawartości. Parametr <code>options</code> jest obecnie przeznaczony do użytku wewnętrznego.



## Category
Accessing data
