---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Menghapus semua kemunculan nilai input.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Menghapus semua kemunculan nilai tertentu dalam `list2` dari daftar `list1`. Jika nilai dalam `list2` tidak terdapat dalam `list1`, daftar asli akan dihasilkan. Nilai kriteria persamaan opsional, `equationCriteria`, dapat ditetapkan untuk mengontrol pengujian kesamaan.


## Examples

### Example #1
Membuat daftar dari \{1, 2, 3, 4, 5, 5\} tanpa \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
