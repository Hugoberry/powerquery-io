---
title: Folder.Files
---

# Folder.Files


## Description

Returnerer en tabel, der indeholder egenskaberne for og indholdet i de filer, der blev fundet i den angivne mappe og de angivne undermapper.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hver fil, der findes i mappen <code>path</code> og alle dens undermapper. De enkelte rækker indeholder egenskaber for filen og et link til indholdet. Parameteren <code>options</code> er i øjeblikket kun beregnet til intern brug.



## Category
Accessing data
