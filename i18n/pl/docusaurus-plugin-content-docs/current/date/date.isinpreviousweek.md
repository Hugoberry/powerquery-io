---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Wskazuje, czy ta data przypada w poprzednim tygodniu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego tygodnia.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w poprzednim tygodniu określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w bieżącym tygodniu.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Ustal, czy tydzień przed aktualną godziną systemu wypada w poprzednim tygodniu.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
