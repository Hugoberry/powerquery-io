---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Возвращает таблицу, содержащую свойства и содержимое файлов и папок, найденных в заданной папке из файловой системы Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Возвращает таблицу, содержащую одну строку для каждой папки и каждого файла, найденного по URL-адресу папки <code>url</code> из файловой системы Hadoop. Каждая строка представляет свойства файла или папки и ссылку на содержимое.



## Category
Accessing data
