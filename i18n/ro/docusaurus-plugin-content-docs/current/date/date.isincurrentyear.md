---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indică dacă această dată apare în timpul anului curent, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul anului curent, după cum este determinat de data şi ora curente ale sistemului.

-   `dateTime`: O valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ora curentă a sistemului este în anul curent.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
