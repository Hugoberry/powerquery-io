---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indică dacă această valoare datetime apare în timpul orei curente, după cum este determinat de data și ora curente ale sistemului.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul orei curente, după cum este determinat de data și ora curente ale sistemului.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinați dacă ora curentă a sistemului este în ora curentă.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
