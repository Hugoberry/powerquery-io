---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Eltávolítja a bemeneti értékek összes előfordulását.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Eltávolítja a(z) `list2` listán szereplő megadott értékek összes előfordulását a(z) `list1` listáról. Ha a(z) `list2` listán szereplő értékek nem szerepelnek a(z) `list1` listán, a függvény az eredeti listát adja vissza. Megadható egy nem kötelező `equationCriteria` egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához.


## Examples

### Example #1
Lista létrehozása az \{1, 2, 3, 4, 5, 5\} listából az \{1, 5\} lista elemei nélkül
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
