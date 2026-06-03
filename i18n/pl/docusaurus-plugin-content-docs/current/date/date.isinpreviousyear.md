---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Wskazuje, czy ta data przypada w poprzednim roku określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w poprzednim roku określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w bieżącym roku.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Ustal, czy rok przed aktualną godziną systemu wypada w poprzednim roku.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
