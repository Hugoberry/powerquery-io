---
title: List.PositionOfAny
---

# List.PositionOfAny


Palauttaa luettelon arvon ensimmäisen siirtymän.


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

Palauttaa siirtymän, jossa määritetyn arvoluettelon kohde esiintyy luettelossa. Palauttaa arvon -1, jos esiintymää ei löydy.

-   `list`: Haettava luettelo.
-   `values`: Luettelo arvoista, joita etsitään alkuperäisestä luettelosta.
-   `occurrence`: (Valinnainen) tietty raportoitava esiintymä. Tämä arvo voi olla `Occurrence.First`, `Occurrence.Last` tai `Occurrence.All`. Jos arvoa `occurrence` ei ole määritetty, käytetään arvoa `Occurrence.First`.
-   `equationCriteria`: (Valinnainen) Määrittää, miten yhtäläisyys määritetään arvoja verrattaessa. Tämä parametri voi olla avainvalitsinfunktio, vertailufunktio tai luettelo, joka sisältää sekä avainvalitsimen että vertailijan.


## Examples

### Example #1
Selvitä luettelossa \{1, 2, 3\} oleva ensimmäinen sijainti, jossa arvo 2 tai 3 esiintyy.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Etsi sijoitus kaikkien vuoden 2022 tai 2023 päivämäärien esiintymien luettelosta.
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
Etsi sijoitus sanan "koira" tai "kissa" viimeisen esiintymän luettelosta, kirjainkoko huomioimatta.
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
Etsi luettelosta mikä tahansa sijoitus, joka on kahden yksikön päässä luvusta 17 tai 28.
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
