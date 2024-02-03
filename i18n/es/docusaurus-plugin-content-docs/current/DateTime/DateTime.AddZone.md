---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Añade la información de la zona horaria al valor de fecha y hora.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Agrega la información de zona horaria al valor de <code>dateTime</code>. La información de zona horaria incluye <code>timezoneHours</code> y, opcionalmente, <code>timezoneMinutes</code>, que especifican el desplazamiento deseado respecto a la hora UTC.


## Examples

### Example #1 
Establezca la zona horaria en UTC+7:30 (7 horas y 30 minutos posteriores a UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
