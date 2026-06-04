---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Gaunama reikšmės laiko juostos valanda.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Pateikiamas `datetimezone` reikšmės laiko juostos valandų komponentas.

-   `dateTimeZone`: `datetimezone` reikšmė, iš kurios išskleidžiamas laiko juostos valandų komponentas. Jei `dateTimeZone` yra `null`, funkcija pateikia `null`.


## Examples

### Example #1
Gaukite nurodytos `datetimezone` reikšmės laiko juostos valandų komponentą.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
