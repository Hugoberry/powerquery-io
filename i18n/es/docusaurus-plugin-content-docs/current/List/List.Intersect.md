---
title: List.Intersect
---

# List.Intersect


## Description

Devuelve la intersección de los valores de lista encontrados en la entrada.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Devuelve la intersección de los valores de la lista encontrados en la lista de entrada <code>lists</code>. Se puede especificar un parámetro opcional, <code>equationCriteria</code>,.


## Examples

### Example #1 
Busca la intersección de las listas \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
