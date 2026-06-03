---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Wskazuje, czy ta data przypada w poprzednim kwartale określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w poprzednim kwartale określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Ustal, czy kwartał przed aktualną godziną systemu wypada w poprzednim kwartale.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
