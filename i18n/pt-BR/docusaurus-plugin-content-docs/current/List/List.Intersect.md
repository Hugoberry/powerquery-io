---
title: List.Intersect
---

# List.Intersect


## Description

Retorna a interseção dos valores de lista encontrados na entrada.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Retorna a interseção dos valores de lista encontrados na lista de entrada <code>lists</code>. Um parâmetro opcional, <code>equationCriteria</code>, pode ser especificado.


## Examples

### Example #1 
Localize a interseção das listas \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
