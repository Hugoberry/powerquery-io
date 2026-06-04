---
title: Date.AddWeeks
---

# Date.AddWeeks


Hozzáadja a megadott számú hetet a dátumhoz.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Azt a `date`, `datetime` vagy `datetimezone` típusú eredményt adja vissza, amely `numberOfWeeks` hétnek a(z) `dateTime` `datetime` értékhez való hozzáadásával keletkezik.

-   `dateTime`: Az a `date`, `datetime` vagy `datetimezone` típusú érték, amelyhez heteket ad hozzá
-   `numberOfWeeks`: A hozzáadni kívánt hetek száma


## Examples

### Example #1
2 hét hozzáadása a 2011. 05. 14. dátumot jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
