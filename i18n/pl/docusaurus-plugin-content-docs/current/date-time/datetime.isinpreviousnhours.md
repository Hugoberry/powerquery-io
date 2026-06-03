---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Wskazuje, czy ta data/godzina przypada w ciągu poprzednich godzin określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzednich godzin określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej godziny.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.
-   `hours`: liczba godzin.


## Examples

### Example #1
Określ, czy godzina przed bieżącą datą systemu występuje w ciągu poprzednich dwóch godzin.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
