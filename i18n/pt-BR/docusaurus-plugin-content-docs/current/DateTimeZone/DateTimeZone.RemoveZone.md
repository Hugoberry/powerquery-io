---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Remova as informações de fuso horário do valor datetimezone especificado.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Retorna um valor #datetime de <code>dateTimeZone</code> com as informações de fuso horário removidas.


## Examples

### Example #1 
Remova as informações de fuso horário do valor #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
