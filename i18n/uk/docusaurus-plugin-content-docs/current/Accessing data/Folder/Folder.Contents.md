---
title: Folder.Contents
---

# Folder.Contents


## Description

Повертає таблицю, що містить властивості та вміст файлів і папок, знайдених у вказаній папці.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Повертає таблицю, яка містить рядок для кожної папки та файлу, знайдених у папці <code>path</code>. Кожен рядок містить властивості папки або файлу та посилання на їхній вміст. Параметр <code>options</code> зараз призначений лише для внутрішнього використання.



## Category
Accessing data
