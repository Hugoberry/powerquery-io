---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indică dacă această dată apare în timpul anului curent şi este în sau înainte de ziua curentă, după cum este determinat de data şi ora curente ale sistemului.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul anului curent şi este în sau înainte de ziua curentă, după cum este determinat de data şi ora curente ale sistemului.

-   `dateTime`: O valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ora curentă a sistemului este în anul acesta până în prezent.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
