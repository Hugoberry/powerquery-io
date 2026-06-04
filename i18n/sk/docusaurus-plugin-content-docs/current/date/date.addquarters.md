---
title: Date.AddQuarters
---

# Date.AddQuarters


Pripočíta zadané štvrťroky k dátumu.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Vráti výsledok `date`, `datetime` alebo `datetimezone` z pripočítania `numberOfQuarters` štvrťrokov k hodnote `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ku ktorej sa pripočítavajú štvrťroky.
-   `numberOfQuarters`: Počet štvrťrokov, ktoré sa majú pripočítať.


## Examples

### Example #1
Pripočítajte 1 štvrťrok k hodnote `date`, `datetime` alebo `datetimezone` predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
