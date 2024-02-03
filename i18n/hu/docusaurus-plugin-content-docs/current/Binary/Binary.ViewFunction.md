---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Létrehoz egy függvényt, amelyet elfoghat egy nézetben (a Binary.View használatával) meghatározott kezelő.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Egy <code>function</code>-alapú nézetfüggvényt hoz létre, amelyet a <code>Binary.View</code> által létrehozott nézetben lehet kezelni.<br />A <code>Binary.View</code> <code>OnInvoke</code> kezelőjével lehet meghatározni a nézetfüggvény kezelőjét.<br />A beépített műveletek kezelőihez hasonlóan, ha nem lett meghatározva <code>OnInvoke</code> kezelő, vagy ha az nem kezeli a nézetfüggvényt, illetve ha a kezelő valamilyen hibát jelez, a rendszer a <code>function</code> elemet alkalmazza a nézet tetején.<br />A <code>Binary.View</code> és az egyéni nézetfüggvények részletesebb leírásáért tekintse meg a Power Query egyéni csatlakoztató közzétett dokumentációját.<br />



## Category
Binary
