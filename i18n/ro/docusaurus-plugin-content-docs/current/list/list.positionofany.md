---
title: List.PositionOfAny
---

# List.PositionOfAny


Returnează primul decalaj al unei valori dintr-o listă.


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

Returnează decalajul la care un element din lista de valori specificată apare într-o listă. Returnează -1 dacă nu se găsește nicio ocurență.

-   `list`: Lista de căutat.
-   `values`: lista de valori de găsit în lista originală.
-   `occurrence`: (Opțional) Ocurența specifică de raportat. Această valoare poate fi `Occurrence.First`, `Occurrence.Last` sau `Occurrence.All`. Dacă nu este specificat niciun `occurrence`, se utilizează `Occurrence.First`.
-   `equationCriteria`: (Opțional) specifică modul în care se determină egalitate la compararea valorilor. Acest parametru poate fi o funcție selector de taste, o funcție de comparare sau o listă care conține atât un selector de taste, cât și un comparator.


## Examples

### Example #1
Găsiţi prima poziţie din lista \{1, 2, 3\} în care apare valoarea 2 sau 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Găsiți poziția în lista cu toate instanțele datelor din 2022 sau 2023.
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
Găsiți poziția în lista ultimei apariții a cuvântului câine sau pisică, ignorând literele mari și mici.
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
Găsiți orice poziție din listă care se află în două unități de număr 17 sau 28.
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
