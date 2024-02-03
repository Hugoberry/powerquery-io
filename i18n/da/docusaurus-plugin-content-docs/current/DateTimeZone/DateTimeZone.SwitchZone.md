---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Ændrer tidszonen i værdien.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Ændrer tidszoneoplysninger i værdien af typen datetimezone, <code>dateTimeZone</code>, til de nye tidszoneoplysninger, der leveres af <code>timezoneHours</code> og eventuelt af <code>timezoneMinutes</code>.    Hvis <code>dateTimeZone</code> ikke har en tidszonekomponent, udløses der en undtagelse.


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
