---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Menghapus item dari daftar 1 yang terdapat dalam daftar.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Menghapus semua kemunculan nilai tertentu dalam <code>list2</code> dari <code>list1</code>. Jika nilai dalam <code>list2</code> tidak terdapat dalam <code>list1</code>, daftar asli akan dihasilkan.


## Examples

### Example #1 
Menghapus item dalam daftar \{2, 4, 6} dari daftar \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
