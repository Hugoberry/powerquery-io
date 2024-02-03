---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Eltávolítja az összes „null” értéket a megadott listáról.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Eltávolítja a „null” értékek összes előfordulását a(z) <code>list</code> listáról. Ha nem szerepelnek „null” értékek a listán, a függvény az eredeti listát adja vissza.


## Examples

### Example #1 
Az összes „null” érték eltávolítása az \{1, 2, 3, null, 4, 5, null, 6} listáról
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
