---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indică dacă această dată apare în timpul zilei curente, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul zilei curente, după cum este determinat de data şi ora curente ale sistemului.

-   `dateTime`: O valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ora curentă a sistemului este în ziua curentă.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
