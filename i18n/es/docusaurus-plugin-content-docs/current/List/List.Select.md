---
title: List.Select
---

# List.Select


## Description

Devuelve una lista de valores que cumplen la condición.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Devuelve una lista de valores de la lista <code>list</code>, que coincide con la condición de selección <code>selection</code>.


## Examples

### Example #1 
Buscar los valores de la lista \{1, -3, 4, 9, -2} que son mayores que 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
