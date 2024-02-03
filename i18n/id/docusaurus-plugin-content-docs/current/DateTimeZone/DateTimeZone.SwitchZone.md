---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Mengubah timezone nilai.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Mengubah informasi zona waktu pada nilai datetimezone <code>dateTimeZone</code> ke informasi zona waktu baru yang disediakan oleh <code>timezoneHours</code> dan secara opsional <code>timezoneMinutes</code>.    Jika <code>dateTimeZone</code> tidak memiliki komponen timezone, maka pengecualian akan dibuat.


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
