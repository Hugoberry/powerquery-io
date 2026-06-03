---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Wskazuje, czy ta data przypada w następnym kwartale określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w następnym kwartale określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Ustal, czy kwartał po aktualnej godzinie systemu wypada w następnym kwartale.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
