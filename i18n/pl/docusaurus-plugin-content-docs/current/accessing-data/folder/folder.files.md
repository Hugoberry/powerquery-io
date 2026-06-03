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

Zwraca tabelę zawierającą wiersz dla każdego pliku znalezionego w określonym folderze i wszystkich jego podfolderach.

-   `path`: ścieżka do folderu, z którego chcesz pobrać pliki. Dostarczona ścieżka folderu musi być prawidłową ścieżką bezwzględną.
-   `options`: (opcjonalnie) ten parametr jest obecnie przeznaczony tylko do użytku wewnętrznego.

Każdy wiersz zwróconej tabeli zawiera właściwości pliku i link do jego zawartości.


## Examples

### Example #1
Zwróć tabelę zawierającą wszystkie pliki znalezione w folderze C:\\test-examples\\example-folder i wszystkich jego podfolderach.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
