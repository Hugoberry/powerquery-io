---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Menghasilkan data berisi bagian nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Mengembalikan data berisi bagian dari nilai datetimezone tertentu, `dateTimeZone`.

-   `dateTimeZone`: Nilai `datetimezone` yang data pada bagiannya akan dihitung.


## Examples

### Example #1
Mengkonversi nilai `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` ke data berisi nilai Tanggal, Waktu, dan Zona.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
