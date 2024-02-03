---
title: Folder.Files
---

# Folder.Files


## Description

Returnează un tabel ce conţine proprietăţile şi conţinutul fişierelor găsite în folderul şi subfolderele specificate.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care conține un rând pentru fiecare fișier găsit în folderul <code>path</code> și în toate subfolderele sale. Fiecare rând conține proprietățile fișierului și un link la conținutul său. Parametrul <code>options</code> este destinat în prezent doar utilizării interne.



## Category
Accessing data
