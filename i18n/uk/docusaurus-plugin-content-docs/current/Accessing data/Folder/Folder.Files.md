---
title: Folder.Files
---

# Folder.Files


## Description

Повертає таблицю, яка містить властивості та вміст файлів, знайдених у вказаній папці та вкладених папках.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Повертає таблицю, яка містить рядок для кожного файлу, знайденого в папці <code>path</code> та всіх її вкладених папках. Кожен рядок містить властивості файлу та посилання на його вміст. Параметр <code>options</code> зараз призначений лише для внутрішнього використання.



## Category
Accessing data
