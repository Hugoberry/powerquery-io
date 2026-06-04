---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Indică dacă această valoare datetime cade în timpul secundei următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următoarei secunde, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determină dacă secunda ulterioară celei indicate de ora curentă a sistemului este în următoarea secundă.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
