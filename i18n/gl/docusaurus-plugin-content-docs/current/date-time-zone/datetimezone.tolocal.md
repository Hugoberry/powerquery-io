---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Converte o compoñente de fuso horario ao fuso horario local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Modifica a información de fuso horario do valor de data e fuso horario `dateTimeZone` á nova información de fuso horario local. Se `dateTimeZone` non ten un compoñente de fuso horario, engádese a información de fuso horario local.


## Examples

### Example #1
Modificar a información de fuso horario de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) ao fuso horario local (utilizando PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
