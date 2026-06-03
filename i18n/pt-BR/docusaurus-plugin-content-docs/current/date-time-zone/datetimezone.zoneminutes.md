---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obtém os minutos de fuso horário do valor.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Retorna o componente de minutos de fuso horário de um valor \`datetimezone\`.

-   `dateTimeZone`: um valor `datetimezone` do qual o componente de minutos de fuso horário é extraído. Se `dateTimeZone` for `null`, a função retornará `null`.


## Examples

### Example #1
Obtenha o componente de minutos de fuso horário do valor \`datetimezone\` especificado.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
