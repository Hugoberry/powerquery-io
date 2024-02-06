---
title: Folder.Files
---

# Folder.Files


Zwraca tabelę zawierającą właściwości i zawartość plików znalezionych w określonym folderze i jego podfolderach.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu plikowi znalezionemu w folderze <code>path</code> i w jego wszystkich podfolderach. Każdy wiersz zawiera właściwości pliku oraz link do ich zawartości. Parametr <code>options</code> jest obecnie przeznaczony do użytku wewnętrznego.



## Category
Accessing data
