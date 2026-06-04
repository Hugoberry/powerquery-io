---
title: List.Sum
---

# List.Sum


Vrátí součet položek v seznamu.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vrátí součet položek v seznamu `list`, které nemají hodnotu null. Pokud seznam neobsahuje jiné hodnoty než null, vrátí hodnotu null.


## Examples

### Example #1
Vrátí součet čísel v seznamu `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
