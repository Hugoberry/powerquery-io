---
title: DateTime.AddZone
---

# DateTime.AddZone


Føjer tidszoneoplysninger til datetime-værdien.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Føjer tidszoneoplysninger til værdien <code>dateTime</code>. Tidszoneoplysningerne omfatter <code>timezoneHours</code> og eventuelt <code>timezoneMinutes</code>, som angiver den ønskede forskydning fra UTC-tid.


## Examples

### Example #1 
Angiv tidszonen til UTC+7:30 (7 timer og 30 minutter efter UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
