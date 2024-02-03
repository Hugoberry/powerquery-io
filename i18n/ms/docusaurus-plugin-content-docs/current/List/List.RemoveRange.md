---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Mengalih keluar nombor kiraan bagi nilai yang bermula di lokasi yang ditentukan.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Mengalih keluar nilai <code>count</code> dalam <code>list</code> yang bermula di lokasi yang ditentukan, <code>index</code>.


## Examples

### Example #1 
Mengalih keluar 3 nilai dalam senarai \{1, 2, 3, 4, -6, -2, -1, 5} bermula pada indeks 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
