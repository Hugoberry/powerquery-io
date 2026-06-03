---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Wskazuje, czy ta data przypada w ciągu następnych kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty/godziny `dateTime` przypada w ciągu następnych kwartałów określonych zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego kwartału.

-   `dateTime`: wartość `date`, `datetime` lub `datetimezone` do oszacowania.
-   `quarters`: liczba kwartałów.


## Examples

### Example #1
Określ, czy kwartał po bieżącej dacie systemu występuje w ciągu przyszłych dwóch kwartałów.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
