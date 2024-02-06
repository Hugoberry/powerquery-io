---
title: Folder.Contents
---

# Folder.Contents


Возвращает таблицу, содержащую свойства и содержимое файлов и папок, обнаруженных в указанной папке.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу, содержащую одну строку для каждой папки и файла, найденных в папке <code>path</code>. Каждая строка представляет свойства файла или папки и ссылку на содержимое. Параметр <code>options</code> в настоящее время предназначен только для внутреннего использования.



## Category
Accessing data
