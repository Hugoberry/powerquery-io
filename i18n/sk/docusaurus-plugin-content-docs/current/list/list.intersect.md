---
title: List.Intersect
---

# List.Intersect


Vráti prienik hodnôt zoznamu nájdených vo vstupe.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vráti prienik hodnôt zoznamu nájdených vo vstupnom zozname `lists`. Možno stanoviť voliteľný parameter `equationCriteria`.


## Examples

### Example #1
Nájdite prienik zoznamov \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
