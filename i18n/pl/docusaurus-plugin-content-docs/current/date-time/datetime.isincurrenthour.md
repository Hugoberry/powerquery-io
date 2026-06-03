---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Wskazuje, czy ta wartość daty i godziny występuje w ciągu bieżącej godziny zgodnie z bieżącą datą i godziną systemu.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość daty i godziny `dateTime` występuje w ciągu bieżącej godziny zgodnie z bieżącą datą i godziną systemu.

-   `dateTime`: wartość `datetime` lub `datetimezone` do sprawdzenia.


## Examples

### Example #1
Określ, czy bieżący czas systemowy występuje w ciągu bieżącej godziny.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
