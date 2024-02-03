---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Hapus informasi timezone dari nilai datetimezone tertentu.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Menghasilkan nilai #datetime dari <code>dateTimeZone</code> dengan informasi timezone terhapus.


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
