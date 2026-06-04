---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Mengalih keluar maklumat zon waktu daripada nilai datetimezone yang ditentukan.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Mengembalikan nilai #datetime daripada `dateTimeZone` dengan maklumat zon waktu timezone information dialih keluar.


## Examples

### Example #1
Alih keluar maklumat zon waktu daripada nilai #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
