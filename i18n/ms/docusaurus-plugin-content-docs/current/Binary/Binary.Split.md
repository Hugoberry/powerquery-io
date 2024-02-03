---
title: Binary.Split
---

# Binary.Split


## Description

Memisahkan binari yang ditentukan kepada senarai binari yang menggunakan saiz halaman yang ditentukan.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Memisahkan <code>binary</code> kepada satu senarai binari bagi iaitu unsur pertama senarai output ialah binari yang mengandungi <code>pageSize</code> bait pertama daripada    senarai sumber, unsur seterusnya dalam senarai output ialah binari yang mengandungi <code>pageSize</code> bait daripada binari senarai sumber, dan sebagainya.



## Category
Binary
