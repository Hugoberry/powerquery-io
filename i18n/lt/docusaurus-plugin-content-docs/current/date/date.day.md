---
title: Date.Day
---

# Date.Day


Pateikiamas dienos komponentas.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` reikšmės dienos komponentas.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, kurią naudojant išskleidžiamas dienos komponentas.


## Examples

### Example #1
Gauti `date`, `datetime` arba `datetimezone` reikšmės dienos komponentą, nurodantį datą ir laiką: 2011 05 14 05:00:00 po pietų.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
