---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Konvertálja az időzóna összetevőt az UTC időzónára.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Módosítja a(z) <code>dateTimeZone</code> datetime érték időzónaadatait az UTC (egyezményes világidő) időzóna adataira.    Ha a(z) <code>dateTimeZone</code> nem tartalmaz időzóna összetevőt, a program hozzáadja az UTC időzóna adatait.


## Examples

### Example #1 
A #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) érték időzónaadatainak módosítása az UTC időzónára
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
