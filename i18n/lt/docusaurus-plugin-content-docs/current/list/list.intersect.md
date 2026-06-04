---
title: List.Intersect
---

# List.Intersect


Pateikiama įvestyje rastų sąrašo reikšmių sankirta.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Pateikiama įvesties sąraše `lists` rastų sąrašo reikšmių sankirta. Galima nurodyti pasirinktinį parametrą, `equationCriteria`.


## Examples

### Example #1
Rasti sąrašų sankirtą \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
