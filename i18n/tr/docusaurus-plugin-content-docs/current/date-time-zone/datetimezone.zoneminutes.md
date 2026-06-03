---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Değerin saat dilimindeki dakikalar bileşenini getirir.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Bir 'datetimezone' değerinin saat dilimindeki dakikalar bileşenini döndürür.

-   `dateTimeZone`: `datetimezone` türünde bir değer; bu değerden saat diliminin dakika bileşeni çıkarılır. `dateTimeZone` `null` ise, işlev `null` döndürür.


## Examples

### Example #1
Belirtilen 'datetimezone' değerinin saat dilimindeki dakika bileşenini alın.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
