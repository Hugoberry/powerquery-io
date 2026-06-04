---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Mengkonversikan komponen timezone ke timezone lokal.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Mengubah informasi timezone dari nilai datetimezone `dateTimeZone` ke informasi timezone lokal. Jika `dateTimeZone` tidak memiliki komponen timezone, maka informasi timezone lokal akan ditambahkan.


## Examples

### Example #1
Mengubah informasi zona waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) ke zona waktu lokal (misalnya, PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
