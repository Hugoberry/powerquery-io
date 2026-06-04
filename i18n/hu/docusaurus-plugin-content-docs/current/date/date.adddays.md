---
title: Date.AddDays
---

# Date.AddDays


Hozzáadja a megadott számú napot a dátumhoz.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Azt a `date`, `datetime` vagy `datetimezone` típusú eredményt adja vissza, amely `numberOfDays` napnak a(z) `dateTime` `datetime` értékhez való hozzáadásával keletkezik.

-   `dateTime`: Az a `date`, `datetime` vagy `datetimezone` típusú érték, amelyhez napokat ad hozzá
-   `numberOfDays`: A hozzáadni kívánt napok száma


## Examples

### Example #1
5 nap hozzáadása a 2011. 05. 14. dátumot jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
