---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Changes the timezone of the value.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Changes timezone information to on the datetimezone value <code>dateTimeZone</code> to the new timezone information provided by <code>timezoneHours</code> and optionally <code>timezoneMinutes</code>.    If <code>dateTimeZone</code> does not have a timezone component, an exception is thrown.


## Examples

### Example #1 
Change timezone information for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) to 8 hours.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Change timezone information for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) to -30 minutes.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
