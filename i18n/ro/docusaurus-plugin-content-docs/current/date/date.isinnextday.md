---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indică dacă această dată cade în timpul zilei următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul zilei următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă ziua ulterioară orei curente a sistemului este în ziua următoare.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
