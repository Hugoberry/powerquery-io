---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Suprimeix la informació de fus horari del valor datetimezone donat.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Retorna un valor #datetime a partir de <code>dateTimeZone</code> amb informació de fus horari suprimida.


## Examples

### Example #1 
Suprimeix la informació de fus horari del valor #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
