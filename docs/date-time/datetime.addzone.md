---
title: DateTime.AddZone
---

# DateTime.AddZone


Adds timezone information to the datetime value.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Adds timezone information to the <code>dateTime</code> value. The timezone information includes <code>timezoneHours</code> and optionally <code>timezoneMinutes</code>, which specify the desired offset from UTC time.


## Examples

### Example #1 
Set the timezone to UTC+7:30 (7 hours and 30 minutes past UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
