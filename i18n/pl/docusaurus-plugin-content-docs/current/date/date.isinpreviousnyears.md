---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Wskazuje, czy ta data przypada w ciągu poprzednich lat określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzednich lat określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.
-   `years`: liczba lat.


## Examples

### Example #1
Określ, czy rok przed bieżącą datą systemu występuje w ciągu poprzednich dwóch lat.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
