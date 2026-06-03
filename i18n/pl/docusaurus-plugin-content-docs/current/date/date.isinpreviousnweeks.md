---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Wskazuje, czy ta data przypada w ciągu poprzednich tygodni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego tygodnia.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu poprzednich tygodni określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego tygodni.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.
-   `weeks`: liczba tygodni.


## Examples

### Example #1
Określ, czy tydzień przed bieżącą datą systemu występuje w ciągu poprzednich dwóch tygodni.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
