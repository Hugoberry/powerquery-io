---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Muuttaa arvon aikavyöhykettä.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Muuttaa datetimezone-arvon `dateTimeZone` aikavyöhyketiedot uusiksi aikavyöhyketiedoiksi, jotka ovat antaneet `timezoneHours` ja valinnaisesti `timezoneMinutes`. Jos `dateTimeZone`:llä ei ole aikavyöhykekomponenttia, esiin tulee virhe.


## Examples

### Example #1
Muuta kohteen #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) aikavyöhyketiedot kahdeksaksi tunniksi.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Muuta kohteen #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) aikavyöhyketiedot arvoon -30 minuuttia.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
