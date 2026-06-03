---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy ta data wypada w bieżącym roku.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa `dateTime` wypada w bieżącym roku.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w bieżącym roku.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
