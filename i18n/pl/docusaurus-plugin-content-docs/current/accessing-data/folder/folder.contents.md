---
title: Folder.Contents
---

# Folder.Contents


Zwraca tabelę zawierającą właściwości i zawartość plików oraz folderów znalezionych w określonym folderze.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu folderowi i plikowi znalezionemu w folderze `path`. Każdy wiersz zawiera właściwości folderu lub pliku oraz link do ich zawartości. Parametr `options` jest obecnie przeznaczony do użytku wewnętrznego.



## Category
Accessing data
