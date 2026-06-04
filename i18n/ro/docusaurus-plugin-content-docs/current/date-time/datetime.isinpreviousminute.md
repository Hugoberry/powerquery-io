---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Indică dacă această valoare datetime cade în minutul anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul minutului anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinați dacă minutul anterior celui indicat de ora curentă a sistemului este în minutul anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
