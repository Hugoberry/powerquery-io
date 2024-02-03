---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Değerin saat dilimini değiştirir.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

<code>dateTimeZone</code> datetimezone değerindeki saat dilimi bilgilerini <code>timezoneHours</code> ve isteğe bağlı olarak <code>timezoneMinutes</code> tarafından sağlanan yeni saat dilimi bilgileri ile değiştirir.    <code>dateTimeZone</code> bir saat dilimi bileşenine sahip değilse, bir özel durum oluşur.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) için saat dilimi bilgilerini 8 saat olarak değiştirir.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) için saat dilimi bilgisini -30 dakika olarak değiştirir.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
