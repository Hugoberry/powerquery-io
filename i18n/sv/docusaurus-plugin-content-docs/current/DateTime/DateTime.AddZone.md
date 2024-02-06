---
title: DateTime.AddZone
---

# DateTime.AddZone


Lägger till tidszonsinformation i datetime-värdet.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Lägger till tidszonsinformation i det <code>dateTime</code>-värdet. Tidszonsinformationen innehåller <code>timezoneHours</code> och eventuellt <code>timezoneMinutes</code>, som anger önskad förskjutning från UTC-tid.


## Examples

### Example #1 
Ange tidszonen till UTC+7:30 (7 timmar och 30 minuter efter UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
