---
title: List.Intersect
---

# List.Intersect


Vrátí průnik hodnot seznamu nalezených ve vstupu.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrátí průnik hodnot seznamu nalezených ve vstupním seznamu `lists`. Lze určit volitelný parametr `equationCriteria`.


## Examples

### Example #1
Zjistí průnik seznamů \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
