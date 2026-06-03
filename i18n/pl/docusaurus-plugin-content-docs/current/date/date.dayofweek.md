---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Zwraca liczbę (od 0 do 6) wskazującą dzień tygodnia dla podanej wartości.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Zwraca liczbę (od 0 do 6) wskazującą dzień tygodnia dla podanej wartości `dateTime`.

-   `dateTime`: Wartość `date`, `datetime` lub `datetimezone`.
-   `firstDayOfWeek`: Wartość `Day` wskazująca dzień uznawany za pierwszy dzień tygodnia. Dozwolona wartość to Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday lub Day.Saturday. Jeśli nie zostanie określona, zostanie użyta wartość domyślna zależna od kultury.


## Examples

### Example #1
Ustal, jaki dzień tygodnia był w poniedziałek 21 lutego 2011 r., używając niedzieli jako pierwszego dnia tygodnia.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Ustal, jaki dzień tygodnia był w poniedziałek 21 lutego 2011 r., używając poniedziałku jako pierwszego dnia tygodnia.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
