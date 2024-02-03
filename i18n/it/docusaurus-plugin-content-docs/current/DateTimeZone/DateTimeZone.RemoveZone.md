---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Rimuove le informazioni del fuso orario dal valore specificato di datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Restituisce un valore #datetime <code>dateTimeZone</code> con le informazioni del fuso orario rimosse.


## Examples

### Example #1 
Rimuovere le informazioni del fuso orario dal valore #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
