---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym roku i czy wypada w bieżącym dniu, czy przed nim.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa `dateTime` wypada w bieżącym roku i czy wypada w bieżącym dniu, czy przed nim.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w okresie od początku roku do daty.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
