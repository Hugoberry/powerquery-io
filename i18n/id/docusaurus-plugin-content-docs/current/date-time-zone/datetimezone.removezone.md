---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Hapus informasi timezone dari nilai datetimezone tertentu.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Menghasilkan nilai #datetime dari `dateTimeZone` dengan informasi timezone terhapus.


## Examples

### Example #1
Menghapus informasi timezone dari nilai #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
