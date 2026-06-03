---
title: Date.AddDays
---

# Date.AddDays


Voegt de opgegeven dagen toe aan de datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Retourneert het resultaat van `date`, `datetime` of `datetimezone` dat volgt uit het toevoegen van `numberOfDays` dagen aan de `datetime`waarde `dateTime`.

-   `dateTime`: de waarde voor `date`, `datetime` of `datetimezone` waaraan dagen worden toegevoegd.
-   `numberOfDays`: het aantal dagen dat u wilt toevoegen.


## Examples

### Example #1
5 dagen aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
