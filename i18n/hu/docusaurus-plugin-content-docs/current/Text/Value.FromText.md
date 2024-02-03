---
title: Value.FromText
---

# Value.FromText


## Description

Létrehoz egy szigorú típusmeghatározású értéket egy szöveges alakból.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekódol egy értéket a <code>text</code> szöveges alakból, és a megfelelő típusú értékként értelmezi azt.    A <code>Value.FromText</code> függvény szöveges értéket fogad, és számot, logikai értéket, null értéket, datetime értéket, időtartamértéket vagy szöveges értéket ad vissza. Az üres szöveges értéket null értékként értelmezi.    Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).



## Category
Text.Conversions from and to text
