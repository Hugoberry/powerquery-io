---
title: List.Sum
---

# List.Sum


Returnează suma elementelor din listă.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returnează suma valorilor care nu sunt null din listă, `list`. Returnează null dacă nu există nicio valoare care nu este null în listă.


## Examples

### Example #1
Găsiţi suma numerelor din lista `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
