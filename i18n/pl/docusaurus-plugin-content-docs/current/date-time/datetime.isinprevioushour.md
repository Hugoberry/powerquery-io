---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Wskazuje, czy ta data/godzina przypada w ciągu poprzedniej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzedniej godziny określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.

-   `dateTime`: wartość `date` lub `datetime` do oszacowania.


## Examples

### Example #1
Określ, czy godzina przed bieżącą datą systemu występuje w ciągu poprzedniej godziny.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
