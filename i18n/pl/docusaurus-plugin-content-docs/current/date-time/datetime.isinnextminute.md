---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Wskazuje, czy ta data/godzina przypada w ciągu następnej minuty określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu następnej minuty określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Określ, czy minuta po bieżącej dacie systemu występuje w ciągu następnej minuty.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
