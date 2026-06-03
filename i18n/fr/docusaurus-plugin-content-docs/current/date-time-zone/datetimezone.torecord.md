---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Retourne un enregistrement qui contient les parties de la valeur datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur datetimezone spécifiée, `dateTimeZone`.

-   `dateTimeZone` : valeur `datetimezone` à partir de laquelle l'enregistrement des parties doit être calculé.


## Examples

### Example #1
Convertit la valeur `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` dans un enregistrement contenant les valeurs Date, Time et Zone.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
