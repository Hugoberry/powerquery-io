---
title: List.Positions
---

# List.Positions


## Description

A bemeneti listához tartozó eltolások listáját adja vissza.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

A(z) <code>list</code> bemeneti listához tartozó eltolások listáját adja vissza.    Ha a List.Transform használatával módosít egy listát, a pozíciók listájának felhasználásával biztosíthatja a hozzáférést a pozícióhoz a transzformáció számára.


## Examples

### Example #1 
Az \{1, 2, 3, 4, null, 5} listán levő értékek eltolásának meghatározása
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
