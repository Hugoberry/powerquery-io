---
title: List.Intersect
---

# List.Intersect


## Description

Returnerar skärningen för listvärdena i indata.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Returnerar skärningen för listvärdena i indatalistan <code>lists</code>. En valfri parameter, <code>equationCriteria</code>, kan användas.


## Examples

### Example #1 
Hitta skärningen för listorna \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
