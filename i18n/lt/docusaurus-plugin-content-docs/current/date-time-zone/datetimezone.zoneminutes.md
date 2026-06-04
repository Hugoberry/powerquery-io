---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Gaunamos reikšmės laiko juostos minutės.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Pateikiamas datos ir \`datetimezone\` reikšmės laiko juostos minučių komponentas.

-   `dateTimeZone`: `datetimezone` reikšmė, iš kurios išskleidžiamas laiko juostos minučių komponentas. Jei `dateTimeZone` yra `null`, funkcija pateikia `null`.


## Examples

### Example #1
Gaukite nurodytos „datetimezone“ reikšmės laiko juostos minučių komponentą.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
