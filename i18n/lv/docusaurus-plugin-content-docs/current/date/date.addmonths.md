---
title: Date.AddMonths
---

# Date.AddMonths


Pievieno datumam norādītos mēnešus.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Atgriež `date`, `datetime` vai `datetimezone` rezultātu no `numberOfMonths` mēnešu pievienošanas `datetime` vērtībai `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek pievienoti mēneši.
-   `numberOfMonths`: pievienojamo mēnešu skaits.


## Examples

### Example #1
Pievienojiet 5 mēnešus `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Pievienojiet 18 mēnešus `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
