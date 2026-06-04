---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Združi vrstice iz dveh tabel, ki se delno ujemajo glede na navedene ključe.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Združi vrstice tabele `table1` z vrsticami tabele `table2` glede na mehko ujemanje vrednosti stolpcev ključev, ki jih izbereta `key1` (za `table1`) in `key2` (za `table2`).

Mehko ujemanje je primerjava, ki ne temelji na enakosti besedila, ampak na podrobnosti besedila.

Privzeto je izvedeno notranje združevanje, vendar pa lahko dodate izbirno možnost `joinKind`, da določite vrsto združevanja. Med možnosti spadajo:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Dodate lahko izbirni nabor možnosti `joinOptions`, da določite način primerjave stolpcev ključev. Med možnosti spadajo:

-   `ConcurrentRequests` : Število med 1 in 8, ki določa število vzporednih niti za uporabo za mehko ujemanje. Privzeta vrednost je 1.
-   `Culture` : Omogoča ujemanje zapisov na podlagi pravil, značilnih za kulturo. Uporabljeno je lahko katero koli veljavno ime kulture. Primer: če je možnost"Kultura"nastavljena na"sl-SI", se zapisi ujemajo na podlagi slovenske kulture. Privzeta vrednost je "", ki vsebuje skupine na podlagi nespremenljive angleške kulture.
-   `IgnoreCase` : Logična vrednost (true/false), ki omogoča ujemanje ključev z razlikovanjem med velikimi in malimi črkami. Primer: če je"true", se beseda"Grozdje"ujema z besedo"grozdje". Privzeta vrednost je"true".
-   `IgnoreSpace` : Logična vrednost (true/false), ki omogoča kombiniranje delov besedila za iskanje ustreznic. Primer: če je"true", se beseda"Gro zdje"ujema z besedo"Grozdje". Privzeta vrednost je"true".
-   `NumberOfMatches` : Celo število, ki določa največje dovoljeno število ujemajočih se vrstic, ki jih je mogoče vrniti za vsako vhodno vrstico. Primer: vrednost 1 bo na primer vrnila največ eno ujemajočo se vrstico za vsako vhodno vrstico. Če ta možnost ni navedena, so vrnjene vse ujemajoče se vrstice.
-   `SimilarityColumnName` : Ime stolpca, ki prikazuje podobnost med vhodno in reprezentativno vrednostjo za ta vnos. Privzeta vrednost je ničelna, ki ne doda novega stolpca za podobnosti.
-   `Threshold` : Število med 0,00 in 1,00, ki določa stopnjo podobnosti, pri kateri se bosta dve vrednosti ujemali. Na primer,"grozdje"in"grodje"(brez črke"z") se ujemata le, če je ta možnost nastavljena na manj kot 0,90. Prag 1,00 omogoča le natančna ujemanja. (Upoštevajte, da se pri nejasnem"natančnem ujemanju"lahko zanemarijo razlike, kot so črkovanje, besedni red in ločila.) Privzeta vrednost je 0,80.
-   `TransformationTable` : Tabela, ki omogoča ujemanje zapisov na podlagi preslikav vrednosti po meri. Vsebovati mora stolpca"Iz"in"V". Primer: beseda"Grozdje"se ujema z besedo"Rozine", če je v tabeli pretvorbe naveden stolpec"Iz", ki vsebuje"Grozdje", in stolpec"V", ki vsebuje"Rozine". Upoštevajte, da bo pretvorba uporabljena za vse ponovitve besedila v tabeli pretvorbe. Z zgornjo tabelo pretvorbe se bo besedna zveza"Grozdje je sladko"ujemala tudi z besedno zvezo"Rozine so sladke".


## Examples

### Example #1
Levo notranje delno združevanje dveh tabel na podlagi stolpca \[FirstName\]
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
