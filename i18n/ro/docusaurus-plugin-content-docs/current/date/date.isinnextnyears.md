---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indică dacă această dată cade în următorul număr de ani, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul următorului număr de ani, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în anul curent.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `years`: Numărul de ani.


## Examples

### Example #1
Determină dacă anul ulterior celui indicat de ora curentă a sistemului cade în următorii doi ani.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
