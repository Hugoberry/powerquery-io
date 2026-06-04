---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Pribavlja čas vremenske zone vrednosti.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vraća komponentu časa vremenske zone `datetimezone` vrednosti.

-   `dateTimeZone`: `datetimezone` vrednost iz koje se izdvaja komponenta časa vremenske zone. Ako je `dateTimeZone` `null`, funkcija vraća `null`.


## Examples

### Example #1
Preuzmite komponentu časa vremenske zone navedene vrednosti `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
