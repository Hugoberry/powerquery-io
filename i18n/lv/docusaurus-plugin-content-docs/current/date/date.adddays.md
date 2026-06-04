---
title: Date.AddDays
---

# Date.AddDays


Pievieno datumam norādītās dienas.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Atgriež rezultātu `date`, `datetime` vai `datetimezone` no `numberOfDays` dienu pievienošanas `datetime` vērtībai `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek pievienotas dienas.
-   `numberOfDays`: pievienojamo dienu skaits.


## Examples

### Example #1
Pievienojiet 5 dienas `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
