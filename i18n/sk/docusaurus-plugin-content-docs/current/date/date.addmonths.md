---
title: Date.AddMonths
---

# Date.AddMonths


Pripočíta zadané mesiace k dátumu.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Vráti výsledok `date`, `datetime` alebo `datetimezone` z pripočítania `numberOfMonths` mesiacov k hodnote `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ku ktorej sa pripočítavajú mesiace.
-   `numberOfMonths`: Počet mesiacov, ktoré sa majú pripočítať.


## Examples

### Example #1
Pripočítajte 5 mesiacov k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Pripočítajte 18 mesiacov k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011 a čas 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
