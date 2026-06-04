---
title: Date.Day
---

# Date.Day


Vraća komponentu dana.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Vraća komponentu vrednosti dana `date`, `datetime` ili `datetimezone`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na osnovu koje se izdvaja komponenta dana.


## Examples

### Example #1
Izračunavanje komponente dana vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011. i vreme 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
