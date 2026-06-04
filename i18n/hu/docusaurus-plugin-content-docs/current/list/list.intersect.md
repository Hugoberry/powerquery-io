---
title: List.Intersect
---

# List.Intersect


A bemenetben található listaértékek metszetét adja vissza.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

A bemeneti `lists` listában található listaértékek metszetét adja vissza. Megadható egy nem kötelező `equationCriteria` paraméter is.


## Examples

### Example #1
A következő listák metszetének megkeresése: \{1..5\}, \{2..6\}, \{3..7\}
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
