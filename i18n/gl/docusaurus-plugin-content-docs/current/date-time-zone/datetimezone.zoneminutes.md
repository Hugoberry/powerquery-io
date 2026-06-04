---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obtén os minutos do fuso horario do valor.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Devolve o compoñente de minutos do fuso horario dun valor \`datetimezone\`.

-   `dateTimeZone` : Un valor de \``datetimezone`\` do que se extrae o compoñente de minutos do fuso horario. Se `dateTimeZone` é `null`, a función devolve `null`.


## Examples

### Example #1
Obtén o compoñente de minutos do fuso horario do valor especificado de "datatimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
