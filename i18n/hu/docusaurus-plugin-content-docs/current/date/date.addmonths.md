---
title: Date.AddMonths
---

# Date.AddMonths


Hozzáadja a megadott számú hónapot a dátumhoz.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Azt a `date`, `datetime` vagy `datetimezone` típusú eredményt adja vissza, amely `numberOfMonths` hónap és a(z) `dateTime` `datetime` érték összeadásából keletkezik.

-   `dateTime`: Az a `date`, `datetime` vagy `datetimezone` típusú érték, amelyhez hónapokat ad hozzá.
-   `numberOfMonths`: A hozzáadandó hónapok száma.


## Examples

### Example #1
5 hónap hozzáadása a 2011. 05. 14. dátumot jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
18 hónap hozzáadása a 2011. 05. 14., 08:15:22 dátumot és időt jelölő `date`, `datetime` vagy `datetimezone` típusú értékhez
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
