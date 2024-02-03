---
title: List.Intersect
---

# List.Intersect


## Description

Pateikiama įvestyje rastų sąrašo reikšmių sankirta.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Pateikiama įvesties sąraše <code>lists</code> rastų sąrašo reikšmių sankirta. Galima nurodyti pasirinktinį parametrą, <code>equationCriteria</code>.


## Examples

### Example #1 
Rasti sąrašų sankirtą \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
