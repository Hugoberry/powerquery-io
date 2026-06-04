---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indică dacă această dată cade în timpul numărului de săptămâni anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți faptul că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade în timpul numărului de săptămâni anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.
-   `weeks`: Numărul de săptămâni.


## Examples

### Example #1
Determină dacă săptămâna anterioară celei indicate de ora curentă a sistemului cade în precedentele două săptămâni.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
