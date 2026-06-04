---
title: Date.AddYears
---

# Date.AddYears


Hozzáadja a megadott számú évet a dátumhoz.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Azt a `date`, `datetime` vagy `datetimezone` típusú eredményt adja vissza, amely `numberOfYears` év és a(z) `dateTime` `datetime` érték összeadásából keletkezik.

-   `dateTime`: Az a `date`, `datetime` vagy `datetimezone` típusú érték, amelyhez éveket ad hozzá.
-   `numberOfYears`: A hozzáadandó évek száma.


## Examples

### Example #1
4 év hozzáadása a 2011. 05. 14. dátumot jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
10 év hozzáadása a 2011. 05. 14., 08:15:22 dátumot és időt jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
