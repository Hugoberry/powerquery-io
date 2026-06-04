---
title: List.RemoveItems
---

# List.RemoveItems


Mengalih keluar item daripada senarai1 yang hadir dalam senarai.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Mengalih keluar semua tika nilai yang ditentukan dalam `list2` daripada `list1`. Jika nilai dalam `list2` tidak wujud dalam `list1`, senarai asal dikembalikan.


## Examples

### Example #1
Mengalih keluar item dalam senarai \{2, 4, 6\} daripada senarai \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
