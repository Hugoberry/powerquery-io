---
title: Date.AddYears
---

# Date.AddYears


Pievieno datumam norādītos gadus.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Atgriež `date`, `datetime` vai `datetimezone` rezultātu no `numberOfYears` pievienošanas `datetime` vērtībai `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek pievienoti gadi.
-   `numberOfYears`: pievienojamo gadu skaits.


## Examples

### Example #1
Pievienojiet 4 gadus `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Pievienojiet 10 gadus `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
