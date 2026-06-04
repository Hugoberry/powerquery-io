---
title: List.PositionOf
---

# List.PositionOf


Vráti posuny hodnoty v zozname.


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

Vráti posun, pri ktorom sa zadaná hodnota zobrazí v zozname. Ak sa hodnota nezobrazí, vráti hodnotu -1.

-   `list`: Zoznam na vyhľadávanie.
-   `value`: Hodnota, ktorá sa má nájsť v zozname.
-   `occurrence`: (Voliteľné) Konkrétny výskyt, ktorý sa má nahlásiť. Táto hodnota môže byť `Occurrence.First`, `Occurrence.Last` alebo `Occurrence.All`. Ak nie je zadaná žiadna hodnota `occurrence`, použije sa `Occurrence.First`.
-   `equationCriteria`: (Voliteľné) Určuje, ako sa určuje rovnosť pri porovnávaní hodnôt. Tento parameter môže byť funkciou na výber kľúča, porovnávacou funkciou alebo zoznamom obsahujúcim ako výber kľúča, tak aj porovnávaciu funkciu.


## Examples

### Example #1
Nájdite pozíciu v zozname \{1, 2, 3\}, v ktorej sa vyskytuje hodnota 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Nájdite pozíciu v zozname všetkých inštancií dátumov z roku 2022.
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
Nájdite pozíciu posledného výskytu slova dog v zozname, bez ohľadu na veľkosť písmen.
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
Nájdite pozíciu v zozname, ktorá sa nachádza v rámci dvoch jednotiek od čísla 28.
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
