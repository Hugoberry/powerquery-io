---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Converte il componente di fuso orario nel fuso orario locale.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Modifica le informazioni del fuso orario del valore <code>dateTimeZone</code> di datetimezone sulle informazioni del fuso orario locale.    Se <code>dateTimeZone</code> non è un componente di fuso orario, le informazioni del fuso orario locale vengono aggiunte.


## Examples

### Example #1 
Modificare le informazioni del fuso orario per #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) sul fuso orario locale (si presume PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
