---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Doda nov stolpec z reprezentativnimi vrednostmi, ki so pridobljene z mehkim ujemanjem vrednosti navedenega stolpca v tabeli.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Doda nov stolpec `newColumnName` v tabelo `table` z reprezentativnimi vrednostmi `columnName`. Reprezentativne vrednosti so pridobljene z mehkim ujemanjem vrednostih v tabeli `columnName` za vsako posamezno vrstico.

Dodate lahko izbirni nabor `options`, da določite način primerjave stolpcev ključev. Med možnosti spadajo:

-   `Culture` : Omogoča združevanje zapisov na podlagi pravil, značilnih za kulturo. Uporabljeno je lahko katero koli veljavno ime kulture. Primer: če je možnost"Kultura"nastavljena na"sl-SI", so zapisi združeni na podlagi slovenske kulture. Privzeta vrednost je "", ki vsebuje skupine na podlagi nespremenljive angleške kulture.
-   `IgnoreCase` : Logična vrednost (true/false), ki omogoča združevanje ključev z razlikovanjem med velikimi in malimi črkami. Primer: če je"true", je beseda"Grozdje"združena z besedo"grozdje". Privzeta vrednost je"true".
-   `IgnoreSpace` : Logična vrednost (true/false), ki omogoča kombiniranje delov besedila za iskanje skupin. Primer: če je"true", je beseda"Gro zdje"združena z besedo"Grozdje". Privzeta vrednost je"true".
-   `SimilarityColumnName` : Ime stolpca, ki prikazuje podobnost med vhodno in reprezentativno vrednostjo za ta vnos. Privzeta vrednost je ničelna, ki ne doda novega stolpca za podobnosti.
-   `Threshold` : Število med 0,00 in 1,00, ki določa stopnjo podobnosti, pri kateri bosta dve vrednosti združeni. Na primer,"grozdje"in"grodje"(brez črke"z") sta združeni le, če je ta možnost nastavljena na manj kot 0,90. Prag 1,00 omogoča le natančna ujemanja. (Upoštevajte, da se pri nejasnem"natančnem ujemanju"lahko zanemarijo razlike, kot so črkovanje, besedni red in ločila.) Privzeta vrednost je 0,80.
-   `TransformationTable` : Tabela, ki omogoča združevanje zapisov na podlagi preslikav vrednosti po meri. Vsebovati mora stolpca"Iz"in"V". Primer: beseda"Grozdje"je združena z besedo"Rozine", če je v tabeli pretvorbe naveden stolpec"Iz", ki vsebuje"Grozdje", in stolpec"V", ki vsebuje"Rozine". Upoštevajte, da bo pretvorba uporabljena za vse ponovitve besedila v tabeli pretvorbe. Z zgornjo tabelo pretvorbe bo besedna zveza"Grozdje je sladko"združena tudi z besedno zvezo"Rozine so sladke".


## Examples

### Example #1
Poiščite reprezentativne vrednosti za mesto zaposlenih.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
