---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Zaman dilimi bileşenini UTC saat dilimine dönüştürür.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

<code>dateTimeZone</code> saat dilimi değerinin saat dilimi bilgilerini UTC veya Evrensel Saat saat dilimi bilgileri ile değiştirir.    <code>dateTimeZone</code> bir saat dilimi bileşenine sahip değilse, UTC saat dilimi bilgileri eklenir.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) için saat dilimi bilgilerini UTC saat dilimi olarak değiştirir.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
