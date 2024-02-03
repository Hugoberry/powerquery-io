---
title: List.Reverse
---

# List.Reverse


## Description

Membalik susunan nilai dalam daftar.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Menghasilkan daftar dengan nilai dalam daftar <code>list</code> disusun secara terbalik.


## Examples

### Example #1 
Membuat daftar dari \{1..10} dengan susunan terbalik.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
