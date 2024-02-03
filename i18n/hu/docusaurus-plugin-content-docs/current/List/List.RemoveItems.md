---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Eltávolítja a list1 listáról a list listán szereplő elemeket.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Eltávolítja a(z) <code>list2</code> listán szereplő megadott értékek összes előfordulását a(z) <code>list1</code> listáról. Ha a(z) <code>list2</code> listán szereplő értékek nem szerepelnek a(z) <code>list1</code> listán, a függvény az eredeti listát adja vissza.


## Examples

### Example #1 
A \{2, 4, 6} lista elemeinek eltávolítása az \{1, 2, 3, 4, 2, 5, 5} listáról
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
