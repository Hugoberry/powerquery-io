---
title: List.Range
---

# List.Range


Mengembalikan subset senarai yang bermula di ofset.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Mengembalikan subset `list` bermula pada `offset`. Parameter pilihan, `count`, menetapkan bilangan maksimum item dalam subset.


## Examples

### Example #1
Cari subset yang bermula pada ofset 6 pada senarai nombor 1 hingga 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Cari subset dengan panjang 2 dari ofset 6, daripada senarai nombor 1 hingga 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
