---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Ottiene l'ora del fuso orario del valore.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Restituisce il componente ora del fuso orario di un valore `datetimezone`.

-   `dateTimeZone`: valore `datetimezone` da cui viene estratto il componente ora del fuso orario. Se `dateTimeZone` è `null`, la funzione restituisce `null`.


## Examples

### Example #1
Ottiene il componente ore del fuso orario del valore `datetimezone` specificato.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
