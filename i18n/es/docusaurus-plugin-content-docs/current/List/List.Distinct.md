---
title: List.Distinct
---

# List.Distinct


## Description

Devuelve una lista de valores con los duplicados quitados.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Devuelve una lista que contiene todos los valores de la lista <code>list</code> con los duplicados quitados. Si la lista está vacía, el resultado es una lista vacía.


## Examples

### Example #1 
Quitar duplicados de la lista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
