---
title: Date.EndOfDay
---

# Date.EndOfDay


Pateikia dienos pabaigą.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Pateikiama dienos, kurioje nurodyta `dateTime`, pabaiga. Išsaugoma laiko juostos informacija.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, pagal kurią apskaičiuojama dienos pabaiga.


## Examples

### Example #1
Gauti 2011 05 14 05:00:00 po pietų dienos pabaigą.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Gauti 2011 05 17 05:00:00 po pietų -7:00 dienos pabaigą.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
