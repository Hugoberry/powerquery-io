---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Dodaje informacje o strefie czasowej do wartości daty/godziny.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Dodaje informacje o strefie czasowej do wartości <code>dateTime</code>. Informacje o strefie czasowej obejmują <code>timezoneHours</code> i opcjonalnie <code>timezoneMinutes</code>, które określają żądane przesunięcie od czasu UTC.


## Examples

### Example #1 
Ustaw strefę czasową na UTC+7:30 (7 godzin i 30 minut po strefie UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
