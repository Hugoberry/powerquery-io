---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Pobiera godzinę strefy czasowej wartości.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Zwraca składnik godziny strefy czasowej wartości `datetimezone`.

-   `dateTimeZone`: wartość `datetimezone`, z której wyodrębniono składnik godziny strefy czasowej. Jeśli `dateTimeZone` ma wartość `null`, funkcja zwraca `null`.


## Examples

### Example #1
Pobierz składnik godzin strefy czasowej określonej wartości `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
