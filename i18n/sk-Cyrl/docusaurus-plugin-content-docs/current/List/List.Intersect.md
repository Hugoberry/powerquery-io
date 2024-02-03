---
title: List.Intersect
---

# List.Intersect


## Description

Vráti prienik hodnôt zoznamu nájdených vo vstupe.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Vráti prienik hodnôt zoznamu nájdených vo vstupnom zozname <code>lists</code>. Možno stanoviť voliteľný parameter <code>equationCriteria</code>.


## Examples

### Example #1 
Nájdite prienik zoznamov \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
