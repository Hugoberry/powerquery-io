---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Converteix el component fus horari en el fus horari UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Canvia la informació de fus horari del valor datetime <code>dateTimeZone</code> per la informació de fus horari UTC o de temps universal.    Si <code>dateTimeZone</code> no té un component fus horari, s'afegeix la informació de fus horari UTC.


## Examples

### Example #1 
Canvia la informació de fus horari de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) pel fus horari UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
