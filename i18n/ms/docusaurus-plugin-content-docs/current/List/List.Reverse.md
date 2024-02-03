---
title: List.Reverse
---

# List.Reverse


## Description

Terbalikan urutan nilai dalam senarai.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Mengembalikan senarai dengan nilai dalam senarai <code>list</code> dalam urutan terbalik.


## Examples

### Example #1 
Cipta senarai daripada \{1..10} dalam tertib terbalik.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
