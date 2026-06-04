---
title: List.Intersect
---

# List.Intersect


Vraća presek vrednosti liste pronađenih u unosu.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vraća presek vrednosti liste pronađenih na listi unosa `lists`. Može se navesti opcionalni parametar `equationCriteria`.


## Examples

### Example #1
Pronalaženje preseka lista \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
