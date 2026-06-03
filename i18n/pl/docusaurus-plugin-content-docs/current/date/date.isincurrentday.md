---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Wskazuje, czy ta data wypada w bieżącym dniu, na podstawie aktualnej daty i godziny w systemie.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, na podstawie aktualnej daty i godziny w systemie, czy dana wartość typu datetime równa `dateTime` wypada w bieżącym dniu.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy aktualna godzina systemu wypada w bieżącym dniu.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
