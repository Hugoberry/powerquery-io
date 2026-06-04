---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Pribavlja minute vremenske zone vrednosti.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vraća komponentu minuta vremenske zone vrednosti „datetimezone“.

-   `dateTimeZone`: `datetimezone` vrednost iz koje se izdvaja komponenta minuta vremenske zone. Ako je `dateTimeZone` `null`, funkcija vraća `null`.


## Examples

### Example #1
Preuzmite komponentu minuta vremenske zone navedene vrednosti "datetimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
