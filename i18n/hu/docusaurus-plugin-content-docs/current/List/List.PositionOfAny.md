---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Egy listán szereplő érték első eltolását adja vissza.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Egy <code>values</code> listán szereplő érték <code>list</code> listán való első előfordulásának eltolását adja vissza. –1 értéket ad vissza, ha nem található előfordulás.    Megadható egy nem kötelező <code>occurrence</code> előfordulási paraméter.<ul>    <li><code>occurrence</code>: Az előfordulások visszaadható maximális száma.</li></ul>


## Examples

### Example #1 
A 2 vagy a 3 érték első előfordulási pozíciójának megkeresése az \{1, 2, 3} listán
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
