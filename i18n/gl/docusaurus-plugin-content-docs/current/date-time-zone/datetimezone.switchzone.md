---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Modifica o fuso horario do valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Modifica a información de fuso horario no valor de data, hora e fuso `dateTimeZone` á nova información de fuso horario fornecida por `timezoneHours` e opcionalmente `timezoneMinutes`. Se `dateTimeZone` non ten un compoñente de fuso horario, xérase un erro.


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
