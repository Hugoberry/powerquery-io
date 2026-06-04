---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indică dacă această dată cade în următorul număr de luni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului număr de luni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `months`: Numărul de luni.


## Examples

### Example #1
Determină dacă luna ulterioară celei indicate de ora curentă a sistemului cade în următoarele două luni.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
