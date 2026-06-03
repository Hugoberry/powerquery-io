---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Değerin saat dilimindeki saat bileşenini getirir.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Bir `datetimezone` değerinin saat dilimindeki saat bileşenini döndürür.

-   `dateTimeZone`: Saat dilimindeki saat bileşeninin ayıklandığı `datetimezone` değeri. `dateTimeZone` `null` ise, işlev `null` döndürür.


## Examples

### Example #1
Belirtilen `datetimezone` değeri için saat dilimi bileşenini alın.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
