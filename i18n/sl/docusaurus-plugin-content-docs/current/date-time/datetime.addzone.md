---
title: DateTime.AddZone
---

# DateTime.AddZone


Doda informacije o časovnem pasu za vrednost"datetime".


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Doda informacije o časovnem pasu za vrednost `dateTime`. Informacije o časovnem pasu vključujejo `timezoneHours` in izbirno `timezoneMinutes`, kar določa želeni odmik od časa UTC.


## Examples

### Example #1
Nastavite časovni pas na UTC+7:30 (7 ur in 30 minut po času UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
