---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indică dacă această dată apare în timpul săptămânii curente, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul săptămânii curente, după cum este determinat de data şi ora curente ale sistemului.

-   `dateTime`: O valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ora curentă a sistemului este în săptămâna curentă.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
