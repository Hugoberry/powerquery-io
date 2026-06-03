---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Wskazuje, czy ta data/godzina przypada w ciągu poprzedniej minuty określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzedniej minuty określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Określ, czy minuta przed bieżącą datą systemu występuje w ciągu poprzedniej minuty.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
