---
title: List.TransformMany
---

# List.TransformMany


## Description

Olyan listát ad vissza, amelynek elemei a bemeneti lista megadott függvények használatával való átalakításából származnak.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Egy olyan listát ad vissza, amelynek elemei a bemeneti listából vannak kivetítve.<br />    <br />    A(z) <code>collectionTransform</code> függvény köztes listává alakítja át az egyes elemeket, és a(z) <code>resultTransform</code> függvény megkapja az eredeti elemet és egy elemet a köztes listából a végeredmény létrehozásához. <br />    <br />    A(z) <code>collectionTransform</code> függvény aláírása <code>(x bármely) lista =>... </code>, ahol az <code>x</code> a(z) <code>list</code> eleme.    A(z) <code>resultTransform</code> függvény az eredmény alakját vetíti ki, és az aláírása <code>(x bármely, y bármely) bármely => ...</code>, ahol  az <code>x</code> a(z) <code>list</code> eleme és  az <code>y</code> pedig az <code>x</code> <code>collectionTransform</code> függvénynek történő átadásával létrehozott lista egyik eleme.


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
