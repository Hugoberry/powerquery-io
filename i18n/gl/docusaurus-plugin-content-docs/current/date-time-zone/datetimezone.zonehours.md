---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Obtén a hora da zona horaria do valor.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Devolve o compoñente de hora do fuso horario dun valor `datetimezone`.

-   `dateTimeZone`: Un valor `datetimezone` do que se extrae o compoñente de hora do fuso horario. Se `dateTimeZone` é `null`, a función devolve `null`.


## Examples

### Example #1
Obter o compoñente horario do fuso horario especificado do valor `datatime`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
