---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indică dacă această valoare datetime apare în timpul secundei curente, după cum este determinat de data și ora curente ale sistemului.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` apare în timpul secundei curente, după cum este determinat de data și ora curente ale sistemului.

-   `dateTime`: o valoare `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinați dacă ora curentă a sistemului este în secunda curentă.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
