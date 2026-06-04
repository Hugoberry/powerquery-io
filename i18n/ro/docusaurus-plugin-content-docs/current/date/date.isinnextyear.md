---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Indică dacă această dată cade în timpul anului următor, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului an, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă anul ulterior orei curente a sistemului este în anul următor.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
