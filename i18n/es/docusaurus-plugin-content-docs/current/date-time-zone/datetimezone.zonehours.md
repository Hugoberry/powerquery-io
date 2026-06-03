---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Obtiene la hora de zona horaria del valor.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Devuelve el componente de hora de zona horaria de un valor `datetimezone`.

-   `dateTimeZone`: un valor `datetimezone` del que se extrae el componente de hora de zona horaria. Si `dateTimeZone` es `null`, la función devuelve `null`.


## Examples

### Example #1
Obtiene el componente de horas de zona horaria del valor `datetimezone` especificado.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
