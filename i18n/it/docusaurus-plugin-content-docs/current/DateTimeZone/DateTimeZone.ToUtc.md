---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Converte il componente di fuso orario nel fuso orario UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Modifica le informazioni del fuso orario del valore <code>dateTimeZone</code> di datetime sulle informazioni del fuso orario UTC.    Se <code>dateTimeZone</code> non è un componente di fuso orario, le informazioni del fuso orario UTC vengono aggiunte.


## Examples

### Example #1 
Modificare le informazioni del fuso orario per #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) sul fuso orario UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
