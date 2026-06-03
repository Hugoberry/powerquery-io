---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Convierte el componente de zona horaria a la zona horaria UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Cambia la información de zona horaria del valor datetime `dateTimeZone` por la información de zona horaria UTC u Hora universal. Si `dateTimeZone` no tiene un componente de zona horaria, se suma la información de zona horaria UTC.


## Examples

### Example #1
Cambie la información de zona horaria para #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a la zona horaria UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
