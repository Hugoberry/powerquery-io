---
title: List.Select
---

# List.Select


## Description

Menghasilkan daftar nilai yang sesuai dengan kondisi.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Menghasilkan daftar nilai dari daftar <code>list</code>, yang sesuai dengan kondisi pilihan <code>selection</code>.


## Examples

### Example #1 
Mencari nilai dalam daftar \{1, -3, 4, 9, -2} yang lebih besar dari 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
