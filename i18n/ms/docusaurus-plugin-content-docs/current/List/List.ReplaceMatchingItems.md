---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Menggunakan setiap gantian bagi \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Melaksanakan gantian yang ditentukan pada senarai <code>list</code>. Operasi penggantian <code>replacements</code> terdiri daripada senarai dengan dua nilai, nilai lama dan nilai baru, diberi dalam senarai.    Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan.


## Examples

### Example #1 
Cipta senarai daripada \{1, 2, 3, 4, 5} menggantikan nilai 5 dengan -5 dan nilai 1 dengan -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
