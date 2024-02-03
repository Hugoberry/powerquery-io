---
title: List.Intersect
---

# List.Intersect


## Description

Returnerer skæringspunktet for de listeværdier, der blev fundet i inputtet.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Returnerer skæringspunktet for de listeværdier, der blev fundet på inputlisten <code>lists</code>. Du kan angive en valgfri parameter, <code>equationCriteria</code>.


## Examples

### Example #1 
Find skæringspunktet for listerne \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
