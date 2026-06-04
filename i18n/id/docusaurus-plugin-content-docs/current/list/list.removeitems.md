---
title: List.RemoveItems
---

# List.RemoveItems


Menghapus item dari daftar 1 yang terdapat dalam daftar.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Menghapus semua kemunculan nilai tertentu dalam `list2` dari `list1`. Jika nilai dalam `list2` tidak terdapat dalam `list1`, daftar asli akan dihasilkan.


## Examples

### Example #1
Menghapus item dalam daftar \{2, 4, 6\} dari daftar \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
