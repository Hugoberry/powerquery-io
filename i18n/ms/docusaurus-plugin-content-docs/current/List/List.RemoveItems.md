---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Mengalih keluar item daripada senarai1 yang hadir dalam senarai.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Mengalih keluar semua tika nilai yang ditentukan dalam <code>list2</code> daripada <code>list1</code>. Jika nilai dalam <code>list2</code> tidak wujud dalam <code>list1</code>, senarai asal dikembalikan.


## Examples

### Example #1 
Mengalih keluar item dalam senarai \{2, 4, 6} daripada senarai \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
