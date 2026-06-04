---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Létrehoz egy függvényt, amelyet elfoghat egy nézetben (a Binary.View használatával) meghatározott kezelő.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Egy `function`\-alapú nézetfüggvényt hoz létre, amelyet a `Binary.View` által létrehozott nézetben lehet kezelni.

A `Binary.View` `OnInvoke` kezelőjével lehet meghatározni a nézetfüggvény kezelőjét.

A beépített műveletek kezelőihez hasonlóan, ha nem lett meghatározva `OnInvoke` kezelő, vagy ha az nem kezeli a nézetfüggvényt, illetve ha a kezelő valamilyen hibát jelez, a rendszer a `function` elemet alkalmazza a nézet tetején.

A `Binary.View` és az egyéni nézetfüggvények részletesebb leírásáért tekintse meg a Power Query egyéni csatlakoztató közzétett dokumentációját.



## Category
Binary
