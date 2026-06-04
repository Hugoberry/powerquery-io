---
title: List.RemoveRange
---

# List.RemoveRange


Mengalih keluar nombor kiraan bagi nilai yang bermula di lokasi yang ditentukan.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Mengalih keluar nilai `count` dalam `list` yang bermula di lokasi yang ditentukan, `index`.


## Examples

### Example #1
Mengalih keluar 3 nilai dalam senarai \{1, 2, 3, 4, -6, -2, -1, 5\} bermula pada indeks 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
