---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Verilen datetimezone değerinden saat dilimi bilgilerini kaldırır.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

<code>dateTimeZone</code> öğesinden saat dilimi bilgileri kaldırılmış olarak bir #datetime değeri döndürür.


## Examples

### Example #1 
#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) değerinden saat dilimi bilgilerini kaldırır.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
