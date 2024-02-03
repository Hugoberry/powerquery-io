---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Maina vērtības laika joslu.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Maina informāciju par laika joslu datetimezone vērtībai <code>dateTimeZone</code> uz jauno informāciju par laika joslu, kas norādīta ar <code>timezoneHours</code> un neobligāto <code>timezoneMinutes</code>.    Ja vērtībai <code>dateTimeZone</code> nav laika joslas komponenta, tiek aktivizēts izņēmums.


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
