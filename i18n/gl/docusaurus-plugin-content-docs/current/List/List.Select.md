---
title: List.Select
---

# List.Select


## Description

Devolve unha lista de valores que cumpren a condición.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Devolve unha lista de valores da lista <code>list</code> que cumpren a condición de selección <code>selection</code>.


## Examples

### Example #1 
Buscar os valores da lista \{1, -3, 4, 9, -2} que son maiores que 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
