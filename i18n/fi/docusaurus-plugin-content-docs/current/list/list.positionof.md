---
title: List.PositionOf
---

# List.PositionOf


Palauttaa luettelon arvon siirtymän tai siirtymät.


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

Palauttaa siirtymän, jossa määritetty arvo esiintyy luettelossa. Palauttaa arvon -1, jos arvoa ei löydy.

-   `list`: Haettava luettelo.
-   `value`: Arvo, jota etsitään luettelosta.
-   `occurrence`: (Valinnainen) tietty raportoitava esiintymä. Tämä arvo voi olla `Occurrence.First`, `Occurrence.Last` tai `Occurrence.All`. Jos arvoa `occurrence` ei ole määritetty, käytetään arvoa `Occurrence.First`.
-   `equationCriteria`: (Valinnainen) Määrittää, miten yhtäläisyys määritetään arvoja verrattaessa. Tämä parametri voi olla avainvalitsinfunktio, vertailufunktio tai luettelo, joka sisältää sekä avainvalitsimen että vertailijan.


## Examples

### Example #1
Selvitä luettelossa \{1, 2, 3\} oleva sijainti, jossa arvo 3 esiintyy.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Etsi sijainti kaikkien vuoden 2022 päivämäärien esiintymien luettelosta.
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
Etsi sanan koira viimeisen esiintymän sijainti luettelosta, kirjainkokoa huomioimatta.
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
Etsi luettelosta sijoitus, joka on kahden yksikön päässä luvusta 28.
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
