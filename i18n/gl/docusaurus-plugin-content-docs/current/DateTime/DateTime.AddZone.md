---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Engade información do fuso horario ao valor da data e hora.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Engade información do fuso horaria ao valor <code>dateTime</code>. A información do fuso horario inclúe <code>timezoneHours</code> e opcionalmente <code>timezoneMinutes</code>, que especifican a compensación desexado con respecto á hora UTC.


## Examples

### Example #1 
Establece a zona horaria en UTC+7:30 (7 horas e 30 minutos despois da hora UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
