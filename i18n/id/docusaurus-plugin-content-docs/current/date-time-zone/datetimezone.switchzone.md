---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Mengubah timezone nilai.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Mengubah informasi zona waktu pada nilai datetimezone `dateTimeZone` ke informasi zona waktu baru yang disediakan oleh `timezoneHours` dan secara opsional `timezoneMinutes`. Jika `dateTimeZone` tidak memiliki komponen zona waktu, kesalahan akan muncul.


## Examples

### Example #1
Mengubah informasi zona waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) ke 8 jam.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Mengubah informasi zona waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) menjadi -30 menit.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
