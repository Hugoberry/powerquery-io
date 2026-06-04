---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Indică dacă această dată cade în timpul numărului de zile anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de zile anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ziua curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `days`: Numărul de zile.


## Examples

### Example #1
Determină dacă ziua anterioară celei indicate de ora curentă a sistemului cade în precedentele două zile.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
