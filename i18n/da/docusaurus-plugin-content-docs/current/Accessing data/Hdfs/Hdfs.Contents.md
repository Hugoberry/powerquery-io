---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Returnerer en tabel, der indeholder egenskaberne for og indholdet i de filer og mapper, der blev fundet i den angivne mappe fra et Hadoop-filsystem.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hver mappe og fil, der blev fundet i mappe-URL-adressen <code>url</code> fra et Hadoop-filsystem. De enkelte rækker indeholder egenskaber for mappen eller filen og et link til indholdet.



## Category
Accessing data
