---
title: Folder.Contents
---

# Folder.Contents


Returnerer en tabel, der indeholder egenskaberne og indholdet i de filer og mapper, der blev fundet i den angivne mappe.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hver mappe og fil, der blev fundet i mappen <code>path</code>. De enkelte rækker indeholder egenskaber for mappen eller filen og et link til indholdet. Parameteren <code>options</code> er i øjeblikket kun beregnet til intern brug.



## Category
Accessing data
