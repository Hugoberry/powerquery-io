---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Wskazuje, czy ta data przypada w ciągu następnych lat określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu następnych lat określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.
-   `years`: liczba lat.


## Examples

### Example #1
Określ, czy rok po bieżącej dacie systemu występuje w ciągu przyszłych dwóch lat.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
