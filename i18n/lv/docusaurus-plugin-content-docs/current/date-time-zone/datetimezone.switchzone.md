---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Maina vērtības laika joslu.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Maina informāciju par laika joslu datetimezone vērtībai `dateTimeZone` uz jauno informāciju par laika joslu, kas norādīta ar `timezoneHours` un neobligāto `timezoneMinutes`. Ja `dateTimeZone` nav laika joslas komponenta, tiek izraisīta kļūda.


## Examples

### Example #1
Mainīt informāciju par laika joslu vērtībai #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) uz 8 stundām.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Mainiet informāciju par laika joslu vērtībai #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) uz -30 minūtes.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
