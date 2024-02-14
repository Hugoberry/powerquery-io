---
title: List.Intersect
---

# List.Intersect


Restituisce l&#39;intersezione dei valori di elenco trovati nell&#39;input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce l'intersezione dei valori di elenco trovati nell'elenco di input <code>lists</code>. È possibile specificare il parametro facoltativo <code>equationCriteria</code>.


## Examples

### Example #1 
Trovare l&#39;intersezione degli elenchi \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
