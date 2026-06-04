---
title: List.PositionOfAny
---

# List.PositionOfAny


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


## Remarks

Azt az eltolást adja vissza, amelynél a megadott értéklistából származó elem megjelenik egy listában. -1 értéket ad vissza, ha nincs előfordulás.

-   `list`: A keresendő lista.
-   `values`: Az eredeti listában keresendő értékek listája.
-   `occurrence`: (nem kötelező) A jelentendő konkrét előfordulás. Ez az érték lehet `Occurrence.First`, `Occurrence.Last` vagy `Occurrence.All`. Ha nincs megadva `occurrence`, az `Occurrence.First` lesz használva.
-   `equationCriteria`: (Nem kötelező) Meghatározza, hogy az értékek összehasonlításakor hogyan történik az egyenlőség megállapítása. Ez a paraméter lehet kulcsválasztó függvény, összehasonlító függvény, vagy egy lista, amely tartalmazza mind a kulcsválasztót, mind az összehasonlítót.


## Examples

### Example #1
A 2 vagy a 3 érték első előfordulási pozíciójának megkeresése az \{1, 2, 3\} listán
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
A 2022-es vagy 2023-as dátumok összes előfordulási pozíciójának megkeresése a listában.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
A kutya vagy a macska szó utolsó előfordulásának pozíciója a kis- és nagybetűk figyelmen kívül hagyásával.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
A lista bármelyik olyan pozíciójának megkeresése, amely a 17-es vagy a 28-as számtól két egységen belül van.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
