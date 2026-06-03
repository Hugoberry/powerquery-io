---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym miesiącu.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość w formacie datetime równa `dateTime` wypada w bieżącym miesiącu.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w bieżącym miesiącu.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
