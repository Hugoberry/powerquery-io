---
title: List.PositionOfAny
---

# List.PositionOfAny


Vrne prvi odmik vrednosti na seznamu.


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

Vrne odmik, pri katerem je element iz navedenega seznama vrednosti prikazan na seznamu. Vrne –1, če ni najdena nobena pojavitev.

-   `list`: Seznam za iskanje.
-   `values`: Seznam vrednosti, ki jih želite najti na izvirnem seznamu.
-   `occurrence`: (izbirno) Določena pojavitev, ki jo želite prijaviti. Ta vrednost je lahko `Occurrence.First`, `Occurrence.Last` ali `Occurrence.All`. Če ni določena vrednost `occurrence`, je uporabljena vrednost `Occurrence.First`.
-   `equationCriteria`: (izbirno) Določa način ugotavljanja enakosti pri primerjavi vrednosti. Ta parameter je lahko funkcija izbirnika ključa, funkcija za primerjavo ali seznam, ki vsebuje tako funkcijo izbirnika ključa kot funkcijo za primerjavo.


## Examples

### Example #1
Poiščite prvi položaj na seznamu \{1, 2, 3\}, na katerem je prikazana vrednost 2 ali 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Poiščite mesto na seznamu vseh primerkov datumov iz leta 2022 ali 2023.
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
Poiščite mesto na seznamu zadnje pojavitve besede"pes"ali"mačka", pri čemer ne razlikujte med velikimi in malimi črkami.
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
Poiščite katero koli mesto na seznamu, ki je znotraj dveh enot števila 17 ali 28.
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
