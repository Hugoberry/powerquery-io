---
title: DateTime.AddZone
---

# DateTime.AddZone


Tarih saat değerine saat dilimi bilgisini ekler.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

`dateTime` değerine saat dilimi bilgisini ekler. Saat dilimi bilgisi `timezoneHours` ve isteğe bağlı olarak istenen UTC saati farkını belirten `timezoneMinutes` verisini içerir.


## Examples

### Example #1
Saat dilimini UTC+7:30 (UTC’den 7 saat ve 30 dakika sonra) olarak ayarlar.
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
