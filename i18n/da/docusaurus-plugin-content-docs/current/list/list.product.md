---
title: List.Product
---

# List.Product


Returnerer produktet af tallene på listen.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerer produktet af de tal, der ikke er null, på listen, `numbersList`. Returnerer null, hvis der ikke er tal, som ikke er null, på listen.


## Examples

### Example #1
Find produktet af tallene på listen `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
