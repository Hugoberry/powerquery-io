---
title: Date.AddQuarters
---

# Date.AddQuarters


Hozzáadja a megadott számú negyedévet a dátumhoz.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Azt a `date`, `datetime` vagy `datetimezone` típusú eredményt adja vissza, amely `numberOfQuarters` negyedévnek a(z) `dateTime` `datetime` értékhez való hozzáadásával keletkezik.

-   `dateTime`: Az a `date`, `datetime` vagy `datetimezone` típusú érték, amelyhez negyedéveket ad hozzá
-   `numberOfQuarters`: A hozzáadni kívánt negyedévek száma


## Examples

### Example #1
1 negyedév hozzáadása a 2011. 05. 14. dátumot jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
