---
title: Time.EndOfHour
---

# Time.EndOfHour


Pateikia valandos pabaigą.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Pateikiama valandos, pateikiamos `dateTime` (įskaitant sekundės dalis), pabaiga. Išsaugoma laiko juostos informacija.

-   `dateTime`: `time`, `datetime` arba `datetimezone` reikšmė, pagal kurią apskaičiuojama valandos pabaiga.


## Examples

### Example #1
Gaukite 2011 05 14 05:00:00 po pietų valandos pabaigą.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Gaukite 2011 05 17 17:00:00 valandos pabaigą -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
