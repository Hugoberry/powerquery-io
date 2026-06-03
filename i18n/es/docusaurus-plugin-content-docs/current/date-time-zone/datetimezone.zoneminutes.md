---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obtiene los minutos de zona horaria del valor.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Devuelve el componente de minutos de zona horaria de un valor "datetimezone".

-   `dateTimeZone`: valor `datetimezone` del que se extrae el componente de minutos de zona horaria. Si `dateTimeZone` es `null`, la función devuelve `null`.


## Examples

### Example #1
Obtiene el componente de minutos de zona horaria del valor "datetimezone" especificado.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
