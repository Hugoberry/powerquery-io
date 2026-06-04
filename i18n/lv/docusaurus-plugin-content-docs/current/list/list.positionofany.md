---
title: List.PositionOfAny
---

# List.PositionOfAny


Tiek atgriezta vērtības pirmā nobīde sarakstā.


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

Atgriež nobīdi, no kuras sarakstā tiek parādīts vienums no norādītā vērtību saraksta. Atgriež -1, ja nav atrasts neviens gadījums.

-   `list`: saraksts, kurā jāmeklē.
-   `values`: sākotnējā sarakstā atrodamo vērtību saraksts.
-   `occurrence`: (Neobligāti) Konkrētā gadījuma atskaite. Šī vērtība var būt `Occurrence.First`, `Occurrence.Last` vai `Occurrence.All`. Ja nav norādīts neviens `occurrence`, `Occurrence.First` tiek izmantots.
-   `equationCriteria`: (Neobligāti) Norāda, kā, salīdzinot vērtības, tiek noteikta vienādība. Šis parametrs var būt taustiņu atlasītāja funkcija, salīdzināšanas funkcija vai saraksts, kurā ir gan taustiņu atlasītājs, gan salīdzināšanas funkcija.


## Examples

### Example #1
Iegūstiet vērtības 2 vai 3 pirmo pozīciju sarakstā \{1, 2, 3\}.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Atrodiet pozīciju sarakstā visām datumu instancēm no 2022. vai 2023. gada.
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
Atrodiet pozīciju sarakstā, kurā ir pēdējā vārda “suns” vai “kaķis” parādīšanās, ignorējot reģistru.
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
Atrodiet jebkuru pozīciju sarakstā, kas atrodas divās vienībās no skaitļa 17 vai 28.
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
