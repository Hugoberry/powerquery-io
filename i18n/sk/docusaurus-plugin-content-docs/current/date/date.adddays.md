---
title: Date.AddDays
---

# Date.AddDays


Pripočíta zadané dni k dátumu.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Vráti výsledok `date`, `datetime` alebo `datetimezone` z pripočítania `numberOfDays` dní k hodnote `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ku ktorej sa pripočítavajú dni.
-   `numberOfDays`: Počet dní, ktoré sa majú pripočítať.


## Examples

### Example #1
Pripočítajte 5 dní k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
