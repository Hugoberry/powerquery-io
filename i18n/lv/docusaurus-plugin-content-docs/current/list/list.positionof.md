---
title: List.PositionOf
---

# List.PositionOf


Tiek atgrieztas vērtības nobīdes sarakstā.


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

Atgriež nobīdi, pie kuras norādītā vērtība parādās sarakstā. Tiek atgriezts -1, ja vērtība neparādās.

-   `list`: saraksts, kurā jāmeklē.
-   `value`: Vērtība, ko meklēt sarakstā.
-   `occurrence`: (Neobligāti) Konkrētā gadījuma atskaite. Šī vērtība var būt `Occurrence.First`, `Occurrence.Last` vai `Occurrence.All`. Ja nav norādīts neviens `occurrence`, `Occurrence.First` tiek izmantots.
-   `equationCriteria`: (Neobligāti) Norāda, kā, salīdzinot vērtības, tiek noteikta vienādība. Šis parametrs var būt taustiņu atlasītāja funkcija, salīdzināšanas funkcija vai saraksts, kurā ir gan taustiņu atlasītājs, gan salīdzināšanas funkcija.


## Examples

### Example #1
Iegūstiet vērtības 3 pozīciju sarakstā \{1, 2, 3\}.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Atrodiet pozīciju sarakstā visām datumu instancēm no 2022. gada.
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
Atrodiet pozīciju sarakstā, kurā ir pēdējā vārda "suns" parādīšanās, ignorējot reģistru.
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
Atrodiet pozīciju sarakstā, kas ir divu vienību attālumā no skaitļa 28.
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
