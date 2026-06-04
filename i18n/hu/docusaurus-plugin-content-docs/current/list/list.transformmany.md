---
title: List.TransformMany
---

# List.TransformMany


Olyan listát ad vissza, amelynek elemei a bemeneti lista megadott függvények használatával való átalakításából származnak.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Egy olyan listát ad vissza, amelynek elemei a bemeneti listából vannak kivetítve.  
  
A(z) `collectionTransform` függvény köztes listává alakítja át az egyes elemeket, és a(z) `resultTransform` függvény megkapja az eredeti elemet és egy elemet a köztes listából a végeredmény létrehozásához.  
  
A(z) `collectionTransform` függvény aláírása `(x bármely) lista =>...` , ahol az `x` a(z) `list` eleme. A(z) `resultTransform` függvény az eredmény alakját vetíti ki, és az aláírása `(x bármely, y bármely) bármely => ...`, ahol az `x` a(z) `list` eleme és az `y` pedig az `x` `collectionTransform` függvénynek történő átadásával létrehozott lista egyik eleme.


## Examples

### Example #1
Egybesimíthatja a személyek és a kedvenceik listáját.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
