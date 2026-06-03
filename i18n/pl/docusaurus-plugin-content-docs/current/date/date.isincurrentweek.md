---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym tygodniu.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa `dateTime` wypada w bieżącym tygodniu.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w bieżącym tygodniu.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
