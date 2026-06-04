---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indică dacă această dată cade în timpul numărului de luni anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în luna curentă.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de luni anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în luna curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `months`: Numărul de luni.


## Examples

### Example #1
Determină dacă luna anterioară celei indicate de ora curentă a sistemului cade în precedentele două luni.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
