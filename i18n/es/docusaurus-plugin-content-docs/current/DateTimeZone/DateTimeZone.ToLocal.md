---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Convierte el componente de zona horaria a la zona horaria local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Cambia la información de zona horaria del valor de datetimezone <code>dateTimeZone</code> por la información de zona horaria local.    Si <code>dateTimeZone</code> no tiene un componente de zona horaria, se agrega la información local de zona horaria.


## Examples

### Example #1 
Cambie la información de zona horaria para el #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) a la zona horaria local (suponiendo PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
