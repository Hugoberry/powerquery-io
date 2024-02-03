---
title: Folder.Files
---

# Folder.Files


## Description

Возвращает таблицу, содержащую свойства и содержимое файлов и папок, найденных в указанной папке и вложенных папках.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу, содержащую одну строку для каждого файла, найденного в папке и ее вложенных папках <code>path</code>. Каждая строка представляет свойства файла и ссылку на содержимое. Параметр <code>options</code> в настоящее время предназначен только для внутреннего использования.



## Category
Accessing data