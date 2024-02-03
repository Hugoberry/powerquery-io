---
title: Folder.Contents
---

# Folder.Contents


## Description

Returnează un tabel ce cuprinde proprietățile și conținutul fișierelor și folderelor găsite în folderul specificat.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care conține un rând pentru fiecare folder și fișier găsit în folderul <code>path</code>. Fiecare rând conține proprietățile folderului sau fișierului și un link la conținutul său. Parametrul <code>options</code> este destinat în prezent doar utilizării interne.



## Category
Accessing data
