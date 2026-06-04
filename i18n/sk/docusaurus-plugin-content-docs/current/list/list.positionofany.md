---
title: List.PositionOfAny
---

# List.PositionOfAny


Vráti prvý posun hodnoty v zozname.


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

Vráti posun, pri ktorom sa položka zo zadaného zoznamu hodnôt zobrazí v zozname. Vráti hodnotu -1, ak sa nenájde žiadny výskyt.

-   `list`: Zoznam na vyhľadávanie.
-   `values`: Zoznam hodnôt, ktoré sa majú nájsť v pôvodnom zozname.
-   `occurrence`: (Voliteľné) Konkrétny výskyt, ktorý sa má nahlásiť. Táto hodnota môže byť `Occurrence.First`, `Occurrence.Last` alebo `Occurrence.All`. Ak nie je zadaná žiadna hodnota `occurrence`, použije sa `Occurrence.First`.
-   `equationCriteria`: (Voliteľné) Určuje, ako sa určuje rovnosť pri porovnávaní hodnôt. Tento parameter môže byť funkciou na výber kľúča, porovnávacou funkciou alebo zoznamom obsahujúcim ako výber kľúča, tak aj porovnávaciu funkciu.


## Examples

### Example #1
Nájdite prvú pozíciu v zozname \{1, 2, 3\}, v ktorej sa vyskytuje hodnota 2 alebo 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Nájdite pozíciu v zozname všetkých inštancií dátumov z roku 2022 alebo 2023.
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
Nájdite pozíciu v zozname posledného výskytu slova pes alebo mačka, pričom sa ignoruje veľkosť písmen.
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
Nájdite ľubovoľnú pozíciu v zozname, ktorá sa nachádza v rámci dvoch jednotiek od čísla 17 alebo 28.
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
