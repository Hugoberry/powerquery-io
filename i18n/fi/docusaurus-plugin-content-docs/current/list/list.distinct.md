---
title: List.Distinct
---

# List.Distinct


Palauttaa arvoluettelon, josta on poistettu kaksoiskappaleet.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Palauttaa luettelon, joka sisältää kaikki arvot määritetystä luettelosta, josta kaksoiskappaleet on poistettu. Jos määritetty luettelo on tyhjä, tulos on tyhjää luettelo.

-   `list`: Luettelo, josta erilliset arvot poimitaan.
-   `equationCriteria`: (Valinnainen) Määrittää, miten yhtäläisyys määritetään arvoja verrattaessa. Tämä parametri voi olla avainvalitsinfunktio, vertailufunktio tai luettelo, joka sisältää sekä avainvalitsimen että vertailijan.


## Examples

### Example #1
Poista kaksoiskappaleet luettelosta \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Aloita luettelon lopusta ja valitse hedelmät, joiden tekstin pituus on ainutlaatuinen.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
Aloita luettelon alusta ja valitse ainutlaatuiset hedelmät kirjainkokoa huomioimatta.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Poimi luetteloiden luettelosta ensimmäiset luettelot, joissa on ainutlaatuiset maanimet kirjainkokoa huomioimatta. Sijoita poimitut luettelot uuden taulukon riveille.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
