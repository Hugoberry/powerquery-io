---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Quita la información de zona horaria del valor de zona horaria dado.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Devuelve un valor #datetime de <code>dateTimeZone</code> con la información de zona horaria quitada.


## Examples

### Example #1 
Quita la información de zona horaria del valor #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
