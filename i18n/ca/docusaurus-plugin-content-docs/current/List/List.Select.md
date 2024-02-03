---
title: List.Select
---

# List.Select


## Description

Retorna una llista de valors que coincideixen amb la condició.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Retorna una llista de valors de la llista <code>list</code> que coincideixen amb la condició de selecció <code>selection</code>.


## Examples

### Example #1 
Troba els valors de la llista \{1, -3, 4, 9, -2} que són més grans que 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
