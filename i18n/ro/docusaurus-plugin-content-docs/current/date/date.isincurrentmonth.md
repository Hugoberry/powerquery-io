---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indică dacă această dată apare în timpul lunii curente, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul lunii curente, după cum este determinat de data şi ora curente ale sistemului.

-   `dateTime`: O valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ora curentă a sistemului este în luna curentă.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
