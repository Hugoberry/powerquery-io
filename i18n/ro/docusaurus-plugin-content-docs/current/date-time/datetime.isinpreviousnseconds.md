---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indică dacă această valoare datetime cade în numărul de secunde anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de secunde anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.
-   `seconds`: Numărul de secunde.


## Examples

### Example #1
Determină dacă secunda anterioară celei indicate de ora curentă a sistemului este în cele două secunde precedente.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
