---
title: Date.AddQuarters
---

# Date.AddQuarters


Pievieno datumam norādītos ceturkšņus.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Atgriež `date`, `datetime` vai `datetimezone` rezultātu no `numberOfQuarters` ceturkšņu pievienošanas `datetime` vērtībai `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek pievienoti ceturkšņi.
-   `numberOfQuarters`: pievienojamo ceturkšņu skaits.


## Examples

### Example #1
Pievienojiet 1 ceturksni `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
