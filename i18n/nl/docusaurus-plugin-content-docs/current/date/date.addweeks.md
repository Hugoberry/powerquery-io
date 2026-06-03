---
title: Date.AddWeeks
---

# Date.AddWeeks


Voegt de opgegeven weken toe aan de datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Retourneert het resultaat van `date`, `datetime` of `datetimezone` dat volgt uit het toevoegen van `numberOfWeeks` weken aan de `datetime`waarde `dateTime`.

-   `dateTime`: de waarde voor `date`, `datetime` of `datetimezone` waaraan weken worden toegevoegd.
-   `numberOfWeeks`: het aantal weken dat u wilt toevoegen.


## Examples

### Example #1
2 weken aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
