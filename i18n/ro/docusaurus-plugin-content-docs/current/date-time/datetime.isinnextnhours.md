---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indică dacă această valoare datetime cade în următorul număr de ore, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului număr de ore, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.
-   `hours`: Numărul de ore.


## Examples

### Example #1
Determinați dacă ora ulterioară celei indicate de ora curentă a sistemului este în următoarele două ore.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
