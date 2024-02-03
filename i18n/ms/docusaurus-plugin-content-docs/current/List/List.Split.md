---
title: List.Split
---

# List.Split


## Description

Memisahkan senarai yang ditentukan kepada senarai yang mengandungi senarai menggunakan saiz halaman yang ditentukan.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Memisahkan <code>list</code> kepada satu senarai bagi beberapa senarai dengan unsur pertama senarai output ialah senarai yang mengandungi <code>pageSize</code> unsur pertama daripada    senarai sumber, unsur seterusnya dalam senarai output ialah senarai yang mengandungi <code>pageSize</code> unsur berikutnya daripada senarai sumber, dan sebagainya.



## Category
List.Transformation functions
