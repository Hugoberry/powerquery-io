---
title: Folder.Files
---

# Folder.Files


Returnează un tabel ce conţine proprietăţile şi conţinutul fişierelor găsite în folderul şi subfolderele specificate.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține un rând pentru fiecare fișier găsit în folderul specificat și în toate subfolderele sale.

-   `path`: Calea către folderul din care doriți să regăsiți fișierele. Calea folderului furnizat trebuie să fie o cale absolută validă.
-   `options`: (Opțional) Acest parametru este destinat în prezent doar pentru uz intern.

Fiecare rând al tabelului returnat conține proprietăți ale fișierului și un link către conținutul său.


## Examples

### Example #1
Returnați un tabel care conține toate fișierele disponibile în C:\\test-examples\\example-folder și în toate subfolderele sale.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
