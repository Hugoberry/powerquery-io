---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Wskazuje, czy ta data przypada w poprzednim dniu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że ta funkcja zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego dnia.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w poprzednim dniu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w bieżącym dniu.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Ustal, czy dzień przed aktualną godziną systemu wypada w poprzednim dniu.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
