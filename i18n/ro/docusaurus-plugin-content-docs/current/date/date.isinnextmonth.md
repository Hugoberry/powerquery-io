---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Indică dacă această dată cade în timpul lunii următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul lunii următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă luna ulterioară orei curente a sistemului este în luna următoare.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
