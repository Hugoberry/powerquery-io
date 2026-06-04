---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Obté l'hora del fus horari del valor.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Obtín el component d'hores de fus horari del valor `datetimezone` especificat.

-   `dateTimeZone`: un valor `datetimezone` del qual s'extreu el component d'hora del fus horari. Si `dateTimeZone` és `null`, la funció retorna `null`.


## Examples

### Example #1
Obtín el component d'hores de fus horari del valor `datetimezone` especificat.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
