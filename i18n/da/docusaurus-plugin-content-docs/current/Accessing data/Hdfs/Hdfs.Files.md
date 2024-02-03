---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Returnerer en tabel, der indeholder egenskaberne for og indholdet i de filer, der blev fundet i den angivne mappe og de angivne undermapper fra et Hadoop-filsystem.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hver fil, der blev fundet i mappe-URL-adressen <code>url</code> og undermapperne fra et Hadoop-filsystem. De enkelte rækker indeholder egenskaber for filen og et link til indholdet.



## Category
Accessing data
