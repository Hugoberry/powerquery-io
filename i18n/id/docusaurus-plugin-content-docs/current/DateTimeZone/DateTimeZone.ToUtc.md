---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Mengkonversikan komponen zona waktu ke zona waktu UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Mengubah informasi zona waktu dari nilai datetime <code>dateTimeZone</code> ke informasi zona waktu UTC atau Universal Time.    Jika <code>dateTimeZone</code> tidak memiliki komponen zona waktu, maka informasi zona waktu UTC akan ditambahkan.


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
