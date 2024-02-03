---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Cambia la zona horaria del valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Cambia la información de zona horaria al valor de datetimezone <code>dateTimeZone</code> para la nueva información de zona horaria proporcionada por <code>timezoneHours</code> y, opcionalmente, <code>timezoneMinutes</code>.    Si <code>dateTimeZone</code> no tiene un componente de zona horaria, se inicia una excepción.


## Examples

### Example #1 
Cambie la información de zona horaria para #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a 8 horas.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Cambiar la información de zona horaria para #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a -30 minutos.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
