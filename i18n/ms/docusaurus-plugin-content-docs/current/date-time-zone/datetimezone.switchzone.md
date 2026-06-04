---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Menukar zon waktu bagi nilai.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Menukar maklumat zon waktu kepada nilai datetimezone `dateTimeZone` kepada maklumat zon waktu baharu yang diberikan oleh `timezoneHours` dan secara pilihan `timezoneMinutes`. Jika `dateTimeZone` tidak mempunyai komponen zon waktu, ralat akan dipaparkan.


## Examples

### Example #1
Tukar maklumat zon waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) kepada 8 jam.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Tukar maklumat zon waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) kepada -30 minit.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
