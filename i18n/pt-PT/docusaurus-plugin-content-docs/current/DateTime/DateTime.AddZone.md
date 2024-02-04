---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Adiciona informações de fuso horário ao valor de Data/Hora.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Adiciona informações de fuso horário ao valor de <code>dateTime</code>. As informações de fuso horário incluem <code>timezoneHours</code> e, opcionalmente, <code>timezoneMinutes</code>, que especificam o desfasamento pretendido da hora UTC.


## Examples

### Example #1 
Definir o fuso horário como UTC+7:30 (7 horas e 30 minutos após UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
