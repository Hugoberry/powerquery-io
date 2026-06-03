---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obtém os minutos do fuso horário do valor.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Devolve o componente de minutos do fuso horário de um valor \`datetimezone\`.

-   `dateTimeZone`: um valor `datetimezone` a partir do qual é extraído o componente de minutos do fuso horário. Se `dateTimeZone` for `null`, a função devolve `null`.


## Examples

### Example #1
Obter o componente de minutos de fuso horário do valor "datetimezone" especificado.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
