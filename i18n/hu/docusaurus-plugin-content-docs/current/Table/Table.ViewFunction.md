---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Olyan függvényt hoz létre, amelyet elfoghat egy nézeten (a Table.View-n keresztül) meghatározott kezelő.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Egy <code>function</code>-alapú nézetfüggvényt hoz létre, amelyet a <code>Table.View</code> által létrehozott nézetben lehet kezelni.<br />A <code>Table.View</code> <code>OnInvoke</code> kezelőjével lehet meghatározni a nézetfüggvény kezelőjét.<br />Ugyanúgy, mint a beépített műveletek esetén, ha nincs meghatározva <code>OnInvoke</code> kezelő, vagy ha nem az kezeli a nézetfüggvényt, illetve ha a kezelő valamilyen hibát jelez, <code>function</code> jelenik meg a nézet tetején.<br />A <code>Table.View</code> és az egyéni nézetfüggvények részletes ismertetését lásd a Power Query egyéni csatlakoztató dokumentációjában.<br />



## Category
Table.Table construction
