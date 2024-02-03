---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Elimina a información de fuso horario a partir do valor de data, hora e fuso indicado.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Devolve un valor #datetime de <code>dateTimeZone</code> coa información de fuso horario eliminada.


## Examples

### Example #1 
Elimine a información de fuso horario do valor #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
