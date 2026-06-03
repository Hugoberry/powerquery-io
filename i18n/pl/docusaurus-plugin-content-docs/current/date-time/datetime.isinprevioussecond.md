---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Wskazuje, czy ta data/godzina przypada w ciągu poprzedniej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzedniej sekundy określonej zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej sekundy.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.


## Examples

### Example #1
Określ, czy sekunda przed bieżącą datą systemu występuje w ciągu poprzedniej sekundy.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
