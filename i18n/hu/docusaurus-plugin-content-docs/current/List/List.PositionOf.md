---
title: List.PositionOf
---

# List.PositionOf


## Description

Egy listán szereplő érték eltolását (eltolásait) adja vissza.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Azt az eltolást adja vissza, amelynél a(z) <code>value</code> érték megjelenik a(z) <code>list</code> listán. –1 értéket ad vissza, ha az érték nem szerepel a listán.    Megadható egy nem kötelező <code>occurrence</code> előfordulási paraméter.<ul>    <li><code>occurrence</code>: Az előfordulások jelentendő maximális száma.</li></ul>


## Examples

### Example #1 
A 3 érték előfordulási pozíciójának megkeresése az \{1, 2, 3} listán
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
