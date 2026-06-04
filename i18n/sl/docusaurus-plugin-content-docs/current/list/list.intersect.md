---
title: List.Intersect
---

# List.Intersect


Vrne presek vrednosti seznama, najdenih v vnosu.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrne presek vrednosti seznama, najdenih na vhodnem seznamu `lists`. Določite lahko izbirni parameter, `equationCriteria`.


## Examples

### Example #1
Poiščite presek seznamov \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
