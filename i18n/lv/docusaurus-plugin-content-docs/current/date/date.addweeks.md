---
title: Date.AddWeeks
---

# Date.AddWeeks


Pievieno datumam norādītās nedēļas.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Atgriež `date`, `datetime` vai `datetimezone` rezultātu no `numberOfWeeks` nedēļu pievienošanas `datetime` vērtībai `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek pievienotas nedēļas.
-   `numberOfWeeks`: pievienojamo nedēļu skaits.


## Examples

### Example #1
Pievienot 2 nedēļas `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
