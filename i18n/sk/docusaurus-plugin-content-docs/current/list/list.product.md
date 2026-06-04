---
title: List.Product
---

# List.Product


Vráti súčin čísel v zozname.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Vráti súčin čísel s hodnotami rôznymi od null v zozname `numbersList`. Vráti hodnotu null, ak sa v zozname nenachádzajú žiadne hodnoty rôzne od null.


## Examples

### Example #1
Nájdite súčin čísel v zozname `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
