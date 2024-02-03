---
title: List.Select
---

# List.Select


## Description

Mengembalikan senarai nilai yang sepadan dengan syarat.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Mengembalikan senarai nilai daripada senarai <code>list</code>, yang sepadan dengan syarat pilihan <code>selection</code>.


## Examples

### Example #1 
Cari nilai dalam senarai \{1, -3, 4, 9, -2} yang lebih besar daripada sifar 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
