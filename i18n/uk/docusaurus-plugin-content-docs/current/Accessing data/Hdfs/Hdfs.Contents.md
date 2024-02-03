---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Повертає таблицю, яка містить властивості та вміст файлів і папок, знайдених у вказаній папці файлової системи Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Повертає таблицю, яка містить рядок для кожної папки та кожного файлу, знайдених за URL-адресою папки, <code>url</code>, файлової системи Hadoop. Кожен рядок містить властивості папки або файлу та посилання на їхній вміст.



## Category
Accessing data
