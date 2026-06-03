---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Obtém a hora de fuso horário do valor.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Retorna o componente de hora de fuso horário de um valor `datetimezone`.

-   `dateTimeZone`: um `datetimezone` do qual o componente de hora de fuso horário é extraído. Se `dateTimeZone` for `null`, a função retornará `null`.


## Examples

### Example #1
Obtenha o componente de horas de fuso horário do valor `datetimezone` especificado.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
