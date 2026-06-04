---
title: Table.ViewFunction
---

# Table.ViewFunction


Olyan függvényt hoz létre, amelyet elfoghat egy nézeten (a Table.View-n keresztül) meghatározott kezelő.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Egy `function`\-alapú nézetfüggvényt hoz létre, amelyet a `Table.View` által létrehozott nézetben lehet kezelni.

A `Table.View` `OnInvoke` kezelőjével lehet meghatározni a nézetfüggvény kezelőjét.

Ugyanúgy, mint a beépített műveletek esetén, ha nincs meghatározva `OnInvoke` kezelő, vagy ha nem az kezeli a nézetfüggvényt, illetve ha a kezelő valamilyen hibát jelez, `function` jelenik meg a nézet tetején.

A `Table.View` és az egyéni nézetfüggvények részletes ismertetését lásd a Power Query egyéni csatlakoztató dokumentációjában.



## Category
Table.Table construction
