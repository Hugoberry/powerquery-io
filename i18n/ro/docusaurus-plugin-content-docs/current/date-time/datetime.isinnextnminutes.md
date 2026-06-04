---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indică dacă această valoare datetime cade în următorul număr de minute, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului număr de minute, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.
-   `minutes`: Numărul de minute.


## Examples

### Example #1
Determinați dacă minutul ulterior celui indicat de ora curentă a sistemului este în următoarele două minute.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
