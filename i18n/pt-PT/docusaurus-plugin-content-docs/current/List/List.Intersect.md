---
title: List.Intersect
---

# List.Intersect


## Description

Devolve a interseção dos valores da lista encontrados na entrada.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve a interseção dos valores da lista encontrados na lista de entrada <code>lists</code>. É possível especificar um parâmetro opcional, <code>equationCriteria</code>.


## Examples

### Example #1 
Determinar a interseção das listas \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
