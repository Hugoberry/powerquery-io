---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indică dacă această dată cade în timpul numărului de trimestre anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în trimestrul curent.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de trimestre anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în trimestrul curent.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `quarters`: Numărul de trimestre.


## Examples

### Example #1
Determină dacă trimestrul anterior celui indicat de ora curentă a sistemului cade în precedentele două trimestre.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
