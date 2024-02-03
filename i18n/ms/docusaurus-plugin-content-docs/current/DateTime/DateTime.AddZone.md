---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Tambah maklumat zon masa pada nilai tarikh masa.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Menambah maklumat zon waktu kepada nilai <code>dateTime</code>. Maklumat zon waktu termasuk <code>timezoneHours</code> dan secara pilihan <code>timezoneMinutes</code>, yang menentukan ofset yang diingini dari masa UTC.


## Examples

### Example #1 
Setkan zon waktu kepada UTC+7:30 (7 jam dan 30 minit UTC yang lalu).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
