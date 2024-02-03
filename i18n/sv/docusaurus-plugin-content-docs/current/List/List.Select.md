---
title: List.Select
---

# List.Select


## Description

Returnerar en lista med värden som matchar villkoret.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Returnerar en lista med värden från listan <code>list</code> som matchar urvalsvillkoret <code>selection</code>.


## Examples

### Example #1 
Sök efter de värden i listan \{1, -3, 4, 9, -2} som är större än 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
