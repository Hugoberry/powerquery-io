---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Canvia el fus horari del valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Canvia la informació de fus horari del valor datetimezone `dateTimeZone` per la informació nova de fus horari proporcionada per `timezoneHours` i, com a opció, `timezoneMinutes`. Si `dateTimeZone` no té un component fus horari, es produeix un error.


## Examples

### Example #1
Canvia la informació de fus horari de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) per 8 hores.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Canvia la informació de fus horari de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) per -30 minuts.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
