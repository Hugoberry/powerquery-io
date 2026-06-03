---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Wskazuje, czy ta data przypada w ciągu następnej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu następnej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Określ, czy godzina po bieżącej dacie systemu występuje w ciągu następnej godziny.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
