---
title: List.Product
---

# List.Product


Vrátí součin čísel v seznamu.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrátí součin číselných hodnot v seznamu `numbersList`, které nemají hodnotu null. Pokud seznam neobsahuje jiné hodnoty než null, vrátí hodnotu null.


## Examples

### Example #1
Vrátí součin čísel v seznamu `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
