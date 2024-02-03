---
title: List.Select
---

# List.Select


## Description

Vrátí seznam hodnot, které splňují podmínku.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Vrátí seznam hodnot v seznamu <code>list</code>, které splňují podmínku výběru <code>selection</code>.


## Examples

### Example #1 
Vyhledá v seznamu \{1, -3, 4, 9, -2} hodnoty, které jsou větší než 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
