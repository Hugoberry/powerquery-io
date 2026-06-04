---
title: List.PositionOf
---

# List.PositionOf


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


## Remarks

Visszaadja azt az eltolást, ahol a megadott érték megjelenik egy listában. -1 értéket ad vissza, ha az érték nem található.

-   `list`: A keresendő lista.
-   `value`: A listában keresett érték.
-   `occurrence`: (nem kötelező) A jelentendő konkrét előfordulás. Ez az érték lehet `Occurrence.First`, `Occurrence.Last` vagy `Occurrence.All`. Ha nincs megadva `occurrence`, az `Occurrence.First` lesz használva.
-   `equationCriteria`: (Nem kötelező) Meghatározza, hogy az értékek összehasonlításakor hogyan történik az egyenlőség megállapítása. Ez a paraméter lehet kulcsválasztó függvény, összehasonlító függvény, vagy egy lista, amely tartalmazza mind a kulcsválasztót, mind az összehasonlítót.


## Examples

### Example #1
A 3 érték előfordulási pozíciójának megkeresése az \{1, 2, 3\} listán
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
A 2022-es dátumok összes előfordulási pozíciójának megkeresése a listában.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
A kutya szó utolsó előfordulásának pozíciója a kis- és nagybetűk figyelmen kívül hagyásával.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
A lista azon pozíciójának megkeresése, amely a 28-as számtól számítva két egységen belül található.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
