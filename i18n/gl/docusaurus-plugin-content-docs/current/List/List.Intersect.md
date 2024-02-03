---
title: List.Intersect
---

# List.Intersect


## Description

Devolve a intersección dos valores da lista localizados na entrada.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve a intersección dos valores da lista localizados na lista de entrada <code>lists</code>. Pódese especificar un parámetro opcional, <code>equationCriteria</code>.


## Examples

### Example #1 
Buscar a intersección das listas \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
