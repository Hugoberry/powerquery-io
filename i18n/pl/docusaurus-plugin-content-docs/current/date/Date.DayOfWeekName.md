---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Zwraca nazwę dnia tygodnia.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Zwraca nazwę dnia tygodnia dla podanej wartości <code>date</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobierz nazwę dnia tygodnia.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
