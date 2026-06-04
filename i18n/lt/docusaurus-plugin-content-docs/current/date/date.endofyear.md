---
title: Date.EndOfYear
---

# Date.EndOfYear


Pateikia metų pabaigą.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Pateikiama metų, kuriuose yra `dateTime` (įskaitant sekundės dalis), pabaiga. Išsaugoma laiko juostos informacija.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, pagal kurią apskaičiuojama metų pabaiga.


## Examples

### Example #1
Gauti 2011 05 14 05:00:00 po pietų metų pabaigą.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2
Gauti 2011 05 17 05:00:00 po pietų -7:00 valandos pabaigą.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
