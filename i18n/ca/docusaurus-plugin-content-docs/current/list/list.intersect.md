---
title: List.Intersect
---

# List.Intersect


Retorna la intersecció dels valors de llista que hi ha a l'entrada.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retorna la intersecció dels valors de llista que hi ha a la llista d'entrada `lists`. Es pot especificar un paràmetre opcional `equationCriteria`.


## Examples

### Example #1
Troba la primera intersecció de les llistes \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
