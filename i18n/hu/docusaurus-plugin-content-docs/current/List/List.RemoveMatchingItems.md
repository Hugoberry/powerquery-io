---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Eltávolítja a bemeneti értékek összes előfordulását.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Eltávolítja a(z) <code>list2</code> listán szereplő megadott értékek összes előfordulását a(z) <code>list1</code> listáról. Ha a(z) <code>list2</code> listán szereplő értékek nem szerepelnek a(z) <code>list1</code> listán, a függvény az eredeti listát adja vissza.    Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Lista létrehozása az \{1, 2, 3, 4, 5, 5} listából az \{1, 5} lista elemei nélkül
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
