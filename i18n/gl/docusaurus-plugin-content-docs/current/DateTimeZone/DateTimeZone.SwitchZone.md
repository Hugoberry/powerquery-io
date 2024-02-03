---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Modifica o fuso horario do valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Modifica a información de fuso horario no valor de data, hora e fuso <code>dateTimeZone</code> á nova información de fuso horario fornecida por <code>timezoneHours</code> e opcionalmente <code>timezoneMinutes</code>.    Se <code>dateTimeZone</code> non ten un compoñente de fuso horario, xérase unha excepción.


## Examples

### Example #1 
Modificar a información de fuso horario de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a 8 horas.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Modificar a información de fuso horario de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a -30 minutos.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
