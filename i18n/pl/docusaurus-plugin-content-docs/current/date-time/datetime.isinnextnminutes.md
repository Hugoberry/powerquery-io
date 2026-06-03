---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Wskazuje, czy ta data/godzina przypada w ciągu następnych minut określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu następnych minut określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącej minuty.

-   `dateTime`: wartość `datetime` lub `datetimezone` do oszacowania.
-   `minutes`: liczba minut.


## Examples

### Example #1
Określ, czy godzina po bieżącej dacie systemu występuje w ciągu następnych dwóch minut.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
