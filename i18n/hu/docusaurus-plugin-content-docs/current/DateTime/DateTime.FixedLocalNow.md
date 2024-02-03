---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

Az aktuális dátumot és időt adja vissza a helyi időzónában. Ez az érték rögzített, és egymást követő hívások esetén nem változik.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

Egy olyan <code>datetime</code> típusú értéket ad vissza, amely a rendszer aktuális dátumát és idejét tartalmazza. Ez az érték rögzített, és egymást követő hívások esetén nem változik, ellentétben a DateTime.LocalNow értékkel, amely egy kifejezés végrehajtása során eltérő értékeket adhat vissza.



## Category
DateTime
