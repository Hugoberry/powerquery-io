---
title: Folder.Contents
---

# Folder.Contents


Returnează un tabel ce cuprinde proprietățile și conținutul fișierelor și folderelor găsite în folderul specificat.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține un rând pentru fiecare folder și fișier găsit în folderul `path`. Fiecare rând conține proprietățile folderului sau fișierului și un link la conținutul său. Parametrul `options` este destinat în prezent doar utilizării interne.



## Category
Accessing data
