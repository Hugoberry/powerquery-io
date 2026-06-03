---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Altera o fuso horário do valor.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Altera as informações de fuso horário no valor datetimezone `dateTimeZone` para as novas informações de fuso horário fornecidas por `timezoneHours` e, opcionalmente, `timezoneMinutes`. Se `dateTimeZone` não tiver um componente de fuso horário, um erro será gerado.


## Examples

### Example #1
Altere as informações de fuso horário de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) para 8 horas.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Altere as informações de fuso horário de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) para -30 minutos.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
