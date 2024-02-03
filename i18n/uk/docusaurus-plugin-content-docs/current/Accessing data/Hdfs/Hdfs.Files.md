---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Повертає таблицю, яка містить властивості та вміст файлів, знайдених у вказаній папці та вкладених папках файлової системи Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Повертає таблицю, яка містить рядок для кожного файлу, знайденого за URL-адресою папки, <code>url</code>, і вкладених папок файлової системи Hadoop. Кожен рядок містить властивості файлу та посилання на його вміст.



## Category
Accessing data