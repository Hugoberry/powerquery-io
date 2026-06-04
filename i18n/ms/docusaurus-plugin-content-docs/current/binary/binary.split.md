---
title: Binary.Split
---

# Binary.Split


Memisahkan binari yang ditentukan kepada senarai binari yang menggunakan saiz halaman yang ditentukan.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Memisahkan `binary` kepada satu senarai binari bagi iaitu unsur pertama senarai output ialah binari yang mengandungi `pageSize` bait pertama daripada senarai sumber, unsur seterusnya dalam senarai output ialah binari yang mengandungi `pageSize` bait daripada binari senarai sumber, dan sebagainya.



## Category
Binary
