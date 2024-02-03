---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Converteix el component fus horari en el fus horari local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Canvia la informació de fus horari del valor datetimezone <code>dateTimeZone</code> per la informació de fus horari local.    Si <code>dateTimeZone</code> no té un component fus horari, s'afegeix la informació de fus horari local.


## Examples

### Example #1 
Canvia la informació de fus horari de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) pel fus horari local (assumint PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
