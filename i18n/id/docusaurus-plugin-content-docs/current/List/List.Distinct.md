---
title: List.Distinct
---

# List.Distinct


## Description

Menghasilkan daftar nilai dengan duplikat dihapus.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Menghasilkan daftar yang berisi semua nilai dalam daftar <code>list</code> dengan duplikat dihapus. Jika daftar kosong, hasilnya adalah daftar kosong.


## Examples

### Example #1 
Menghapus duplikat dari daftar \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
