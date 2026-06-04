---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indică dacă această valoare datetime cade în numărul de ore anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de ore anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.
-   `hours`: Numărul de ore.


## Examples

### Example #1
Determinați dacă ora anterioară celei indicate de ora curentă a sistemului este în cele două ore precedente.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
