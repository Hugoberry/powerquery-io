---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Vraća broj od 28 do 31 koji ukazuje na broj dana u mesecu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Vraća broj dana u mesecu u vrednosti `date`, `datetime` ili `datetimezone` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za koju se vraća broj dana u mesecu.


## Examples

### Example #1
Broj dana u mesecu decembru koji su predstavljeni pomoću `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
