---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Indică dacă această dată cade în timpul numărului de ani anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în anul curent.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de ani anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `years`: Numărul de ani.


## Examples

### Example #1
Determină dacă anul anterior celui indicat de ora curentă a sistemului cade în precedenții doi ani.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
