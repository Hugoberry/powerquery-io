---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Az aktuális dátumot és időt adja vissza a helyi időzónában. Ez az érték rögzített, és egymást követő hívások esetén nem változik.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Egy olyan <code>datetime</code> típusú értéket ad vissza, amely a rendszer aktuális dátumát és idejét tartalmazza. A visszaadott érték a helyi időzónát jelölő időzónaadatokat tartalmaz. Ez az érték rögzített, és egymást követő hívások esetén nem változik, ellentétben a DateTimeZone.LocalNow értékkel, amely egy kifejezés végrehajtása során eltérő értékeket adhat vissza.



## Category
DateTimeZone
