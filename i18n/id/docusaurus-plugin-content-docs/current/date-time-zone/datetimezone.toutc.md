---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Mengkonversikan komponen zona waktu ke zona waktu UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Mengubah informasi zona waktu dari nilai datetime `dateTimeZone` ke informasi zona waktu UTC atau Universal Time. Jika `dateTimeZone` tidak memiliki komponen zona waktu, maka informasi zona waktu UTC akan ditambahkan.


## Examples

### Example #1
Mengubah informasi zona waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) ke zona waktu UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
