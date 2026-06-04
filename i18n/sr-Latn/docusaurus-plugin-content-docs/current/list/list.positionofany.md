---
title: List.PositionOfAny
---

# List.PositionOfAny


Vraća prvi pomak vrednosti sa liste.


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

Vraća pomak na kojem se stavka iz navedene liste vrednosti pojavljuje u listi. Vraća -1 ako se ne pronađe nijedno pojavljivanje.

-   `list`: Lista koja se pretražuje.
-   `values`: Lista vrednosti koje treba pronaći na originalnoj listi.
-   `occurrence`: (Opcionalno) Određeno pojavljivanje za izveštaj. Ova vrednost može da bude `Occurrence.First`, `Occurrence.Last`, ili `Occurrence.All`. Ako nijedno `occurrence` nije navedeno, `Occurrence.First` se koristi.
-   `equationCriteria`: (Opciono) Određuje način na koji se utvrđuje jednakost pri upoređivanju vrednosti. Ovaj parametar može biti funkcija birača ključa, funkcija upoređivanja ili lista koja sadrži i birač ključeva i funkciju upoređivanja.


## Examples

### Example #1
Pronalaženje prvog položaja na listi \{1, 2, 3\} na kome se pojavljuje vrednost 2 ili 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Pronađite položaj na listi svih instanci datuma iz 2022. ili 2023.
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
Pronađite položaj na listi poslednjeg pojavljivanja reči „pas” ili „mačka”, zanemarujući slučaj.
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
Pronađite bilo koju poziciju na listi koja se nalazi u okviru dve jedinice broja 17 ili 28.
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
