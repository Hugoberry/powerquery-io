---
title: Date.AddWeeks
---

# Date.AddWeeks


Pripočíta zadané týždne k dátumu.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Vráti výsledok `date`, `datetime` alebo `datetimezone` z pripočítania `numberOfWeeks` týždňov k hodnote `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ku ktorej sa pripočítavajú týždne.
-   `numberOfWeeks`: Počet týždňov, ktoré sa majú pripočítať.


## Examples

### Example #1
Pripočítajte 2 týždne k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
