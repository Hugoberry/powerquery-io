---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Возвращает таблицу, содержащую свойства и контент больших двоичных объектов, обнаруженных в указанном контейнере из хранилища Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Возвращает таблицу, содержащую строку для каждого BLOB-файла, обнаруженного по URL-адресу контейнера, <code>account</code>, из хранилища Azure. Каждая строка содержит свойства файла и ссылку на его содержимое.



## Category
Accessing data
