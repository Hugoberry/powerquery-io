---
title: List.Split
---

# List.Split


Memisahkan senarai yang ditentukan kepada senarai yang mengandungi senarai menggunakan saiz halaman yang ditentukan.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Memisahkan `list` kepada satu senarai bagi beberapa senarai dengan unsur pertama senarai output ialah senarai yang mengandungi `pageSize` unsur pertama daripada senarai sumber, unsur seterusnya dalam senarai output ialah senarai yang mengandungi `pageSize` unsur berikutnya daripada senarai sumber, dan sebagainya.



## Category
List.Transformation functions
