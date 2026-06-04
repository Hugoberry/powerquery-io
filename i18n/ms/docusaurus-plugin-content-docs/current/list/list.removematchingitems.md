---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Mengalih keluar semua tika nilai input.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Mengalih keluar semua tika nilai yang ditentukan dalam `list2` daripada senarai `list1`. Jika nilai dalam `list2` tidak wujud dalam `list1`, senarai asal dikembalikan. Nilai kriteria persamaan pilihan, `equationCriteria`, boleh ditentukan untuk mengawal ujian persamaan.


## Examples

### Example #1
Cipta senarai daripada \{1, 2, 3, 4, 5, 5\} tanpa \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
