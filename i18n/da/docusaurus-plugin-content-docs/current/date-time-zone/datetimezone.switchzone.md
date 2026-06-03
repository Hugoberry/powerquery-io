---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Ændrer tidszonen i værdien.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Ændrer tidszoneoplysninger i værdien af typen datetimezone, `dateTimeZone`, til de nye tidszoneoplysninger, der leveres af `timezoneHours` og eventuelt af `timezoneMinutes`. Hvis `dateTimeZone` ikke har en tidszonekomponent, opstår der en fejl.


## Examples

### Example #1
Skift tidszoneoplysninger for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) til 8 timer.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Skift tidszoneoplysninger for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) til -30 minutter.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
