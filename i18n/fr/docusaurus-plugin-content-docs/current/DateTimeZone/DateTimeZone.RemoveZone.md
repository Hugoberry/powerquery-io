---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Supprime les informations de fuseau horaire de la valeur datetimezone spécifiée.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Retourne une valeur #datetime de <code>dateTimeZone</code> avec les informations de fuseau horaire supprimées.


## Examples

### Example #1 
Supprime les informations de fuseau horaire de la valeur #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
