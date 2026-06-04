---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indică dacă această valoare datetime cade în ora anterioară, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul orei anterioare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinați dacă ora anterioară celei indicate de ora curentă a sistemului este în ora anterioară.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
