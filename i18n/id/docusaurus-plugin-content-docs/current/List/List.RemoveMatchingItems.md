---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Menghapus semua kemunculan nilai input.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Menghapus semua kemunculan nilai tertentu dalam <code>list2</code> dari daftar <code>list1</code>. Jika nilai dalam <code>list2</code> tidak terdapat dalam <code>list1</code>, daftar asli akan dihasilkan.    Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian kesamaan. 


## Examples

### Example #1 
Membuat daftar dari \{1, 2, 3, 4, 5, 5} tanpa \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
