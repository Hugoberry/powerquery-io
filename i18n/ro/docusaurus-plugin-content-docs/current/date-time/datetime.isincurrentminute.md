---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indică dacă această valoare datetime apare în timpul minutului curent, după cum este determinat de data și ora curente ale sistemului.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul minutului curent, după cum este determinat de data și ora curente ale sistemului.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinați dacă ora curentă a sistemului este în minutul curent.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
