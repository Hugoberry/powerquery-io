---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Konvertálja az időzóna összetevőt a helyi időzónára.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Módosítja a(z) <code>dateTimeZone</code> datetimezone érték időzónaadatait a helyi időzóna adataira.    Ha a(z) <code>dateTimeZone</code> nem tartalmaz időzóna összetevőt, a program hozzáadja a helyi időzóna adatait.


## Examples

### Example #1 
A #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) érték időzónaadatainak módosítása a helyi időzónára (Csendes-óceáni időt feltételezve)
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
