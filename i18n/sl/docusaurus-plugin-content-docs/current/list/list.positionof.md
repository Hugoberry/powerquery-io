---
title: List.PositionOf
---

# List.PositionOf


Vrne odmike vrednosti na seznamu.


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

Vrne odmik, pri katerem je navedena vrednost prikazana na seznamu. Vrne –1, če vrednost ni prikazana.

-   `list`: Seznam za iskanje.
-   `value`: Vrednost, ki jo želite najti na seznamu.
-   `occurrence`: (izbirno) Določena pojavitev, ki jo želite prijaviti. Ta vrednost je lahko `Occurrence.First`, `Occurrence.Last` ali `Occurrence.All`. Če ni določena vrednost `occurrence`, je uporabljena vrednost `Occurrence.First`.
-   `equationCriteria`: (izbirno) Določa način ugotavljanja enakosti pri primerjavi vrednosti. Ta parameter je lahko funkcija izbirnika ključa, funkcija za primerjavo ali seznam, ki vsebuje tako funkcijo izbirnika ključa kot funkcijo za primerjavo.


## Examples

### Example #1
Poiščite položaj na seznamu \{1, 2, 3\}, na katerem je prikazana vrednost 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Poiščite položaj na seznamu vseh primerkov datumov iz leta 2022.
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
Poiščite položaj na seznamu zadnje pojavitve besede "pes", pri čemer ne razlikujte med velikimi in malimi črkami.
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
Poiščite mesto na seznamu, ki je v razponu dveh enot od številke 28.
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
