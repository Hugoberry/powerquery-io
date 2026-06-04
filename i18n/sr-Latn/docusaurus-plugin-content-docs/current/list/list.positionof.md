---
title: List.PositionOf
---

# List.PositionOf


Vraća pomak(e) vrednosti sa liste.


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

Vraća pomak na kojem se navedena vrednost pojavljuje u listi. Vraća -1 ako se vrednost ne pojavljuje.

-   `list`: Lista koja se pretražuje.
-   `value`: Vrednost koju treba pronaći na listi.
-   `occurrence`: (Opcionalno) Određeno pojavljivanje za izveštaj. Ova vrednost može da bude `Occurrence.First`, `Occurrence.Last`, ili `Occurrence.All`. Ako nijedno `occurrence` nije navedeno, `Occurrence.First` se koristi.
-   `equationCriteria`: (Opciono) Određuje način na koji se utvrđuje jednakost pri upoređivanju vrednosti. Ovaj parametar može biti funkcija birača ključa, funkcija upoređivanja ili lista koja sadrži i birač ključeva i funkciju upoređivanja.


## Examples

### Example #1
Pronalaženje položaja na listi \{1, 2, 3\} na kome se pojavljuje vrednost 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Pronađite položaj na listi svih instanci datuma iz 2022.
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
Pronađite položaj na listi poslednjeg pojavljivanja reči „pas“, zanemarujući velika i mala slova.
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
Pronađite položaj na listi koji se nalazi unutar dve jedinice broja 28.
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
