---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Canvia el fus horari del valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Canvia la informació de fus horari del valor datetimezone <code>dateTimeZone</code> per la informació nova de fus horari proporcionada per <code>timezoneHours</code> i, com a opció, <code>timezoneMinutes</code>.    Si <code>dateTimeZone</code> no té un component fus horari, es produeix una excepció.


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
