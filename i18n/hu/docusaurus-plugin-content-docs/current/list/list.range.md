---
title: List.Range
---

# List.Range


Egy lista részhalmazát adja vissza egy eltolástól kezdődően.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

A(z) `list` egy részhalmazát adja vissza `offset` kezdettel. A nem kötelező `count` paraméter meghatározza a részhalmazban szereplő elemek maximális számát.


## Examples

### Example #1
Az 1 és 10 közötti számokat tartalmazó lista 6-os eltolásánál kezdődő részhalmaz megkeresése
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Az 1 és 10 közötti számokat tartalmazó lista 6-os eltolásánál kezdődő, 2 hosszúságú részhalmaz megkeresése
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
