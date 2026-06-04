---
title: Date.AddYears
---

# Date.AddYears


Pripočíta zadané roky k dátumu.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Vráti výsledok `date`, `datetime` alebo `datetimezone` z pripočítania `numberOfYears` rokov k hodnote `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ku ktorej sa pripočítavajú roky.
-   `numberOfYears`: Počet rokov, ktoré sa majú pripočítať.


## Examples

### Example #1
Pripočítajte 4 roky k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Pripočítajte 10 rokov k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011 a čas 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
