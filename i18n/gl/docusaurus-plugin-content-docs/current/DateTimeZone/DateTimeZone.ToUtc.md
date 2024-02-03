---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Converte o compoñente de fuso horario ao fuso horario UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Modifica a información de fuso horario do valor de data e hora <code>dateTimeZone</code> á nova información de fuso horario UTC ou Hora Universal.    Se <code>dateTimeZone</code> non ten un compoñente de fuso horario, engádese a información de fuso horario UTC.


## Examples

### Example #1 
Modificar a información de fuso horario de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) ao fuso horario UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
