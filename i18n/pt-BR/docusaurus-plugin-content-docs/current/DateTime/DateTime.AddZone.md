---
title: DateTime.AddZone
---

# DateTime.AddZone


Adiciona informações de fuso horário ao valor datetime.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Adiciona informações de fuso horário ao valor <code>dateTime</code>. As informações de fuso horário incluem <code>timezoneHours</code> e, opcionalmente, <code>timezoneMinutes</code>, que especificam o deslocamento desejado do horário UTC.


## Examples

### Example #1 
Defina o fuso horário para UTC+7:30 (7 horas e 30 minutos após o UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
