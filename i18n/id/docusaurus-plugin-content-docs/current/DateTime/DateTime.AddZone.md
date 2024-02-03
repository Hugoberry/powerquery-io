---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Menambahkan informasi zona waktu ke nilai tanggal/waktu.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Menambahkan informasi zona waktu ke nilai <code>dateTime</code>. Informasi zona waktu meliputi <code>timezoneHours</code> dan secara opsional <code>timezoneMinutes</code>, yang menyebutkan perbedaan yang diinginkan dari waktu UTC.


## Examples

### Example #1 
Atur zona waktu ke UTC+7:30 (7 jam dan 30 menit lebih cepat dari UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
