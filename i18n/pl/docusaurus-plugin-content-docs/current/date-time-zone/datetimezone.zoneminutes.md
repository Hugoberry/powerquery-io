---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Pobiera minuty strefy czasowej wartości.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Zwraca składnik minut strefy czasowej z wartości „datetimezone”.

-   `dateTimeZone`: wartość `datetimezone`, z której wyodrębniono składnik minut strefy czasowej. Jeśli `dateTimeZone` ma wartość `null`, funkcja zwraca wartość `null`.


## Examples

### Example #1
Pobierz składnik minut strefy czasowej określonej wartości „datetimezone”.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
