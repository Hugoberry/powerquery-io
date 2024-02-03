---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Mengalih keluar semua tika nilai input.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Mengalih keluar semua tika nilai yang ditentukan dalam <code>list2</code> daripada senarai <code>list1</code>. Jika nilai dalam <code>list2</code> tidak wujud dalam <code>list1</code>, senarai asal dikembalikan.    Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Cipta senarai daripada \{1, 2, 3, 4, 5, 5} tanpa \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
