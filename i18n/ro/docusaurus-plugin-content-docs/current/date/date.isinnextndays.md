---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indică dacă această dată cade în următorul număr de zile, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului număr de zile, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `days`: Numărul de zile.


## Examples

### Example #1
Determină dacă ziua ulterioară celei indicate de ora curentă a sistemului cade în următoarele două zile.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
