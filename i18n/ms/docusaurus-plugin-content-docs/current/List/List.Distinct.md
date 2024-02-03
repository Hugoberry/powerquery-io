---
title: List.Distinct
---

# List.Distinct


## Description

Mengembalikan senarai nilai dengan pendua dialih keluar.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Mengembalikan senarai yang mengandungi semua nilai dalam senarai <code>list</code> dengan pendua dialih keluar. Jika senarai adalah kosong, hasil ialah senarai kosong.


## Examples

### Example #1 
Alih keluar pendua daripada senarai \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
