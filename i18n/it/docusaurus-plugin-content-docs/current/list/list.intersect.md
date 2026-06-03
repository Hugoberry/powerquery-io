---
title: List.Intersect
---

# List.Intersect


Restituisce l'intersezione dei valori di elenco trovati nell'input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce l'intersezione dei valori di elenco trovati nell'elenco di input `lists`. È possibile specificare il parametro facoltativo `equationCriteria`.


## Examples

### Example #1
Trovare l'intersezione degli elenchi \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
