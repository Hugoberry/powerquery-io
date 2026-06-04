---
title: List.PositionOf
---

# List.PositionOf


Returnează decalajele unei valori dintr-o listă.


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

Returnează decalajul la care valoarea specificată apare într-o listă. Returnează -1 dacă valoarea nu apare.

-   `list`: Lista de căutat.
-   `value`: Valoarea de găsit în listă.
-   `occurrence`: (Opțional) Ocurența specifică de raportat. Această valoare poate fi `Occurrence.First`, `Occurrence.Last` sau `Occurrence.All`. Dacă nu este specificat niciun `occurrence`, se utilizează `Occurrence.First`.
-   `equationCriteria`: (Opțional) specifică modul în care se determină egalitate la compararea valorilor. Acest parametru poate fi o funcție selector de taste, o funcție de comparare sau o listă care conține atât un selector de taste, cât și un comparator.


## Examples

### Example #1
Găsiţi poziţia din lista \{1, 2, 3\} în care apare valoarea 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Găsiți poziția în lista tuturor instanțelor de date din 2022.
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
Găsiți poziția în lista ultimei ocurențe a cuvântului „câine”, ignorând literele mari sau mici.
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
Găsiți poziția din listă care se află la o distanță de cel mult două unități față de numărul 28.
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
