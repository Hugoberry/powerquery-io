---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym kwartale.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa `dateTime` wypada w bieżącym kwartale.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w bieżącym kwartale.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
