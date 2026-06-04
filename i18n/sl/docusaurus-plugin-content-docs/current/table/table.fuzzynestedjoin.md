---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Izvede delno združevanje tabel v podanih stolpcih in vrne rezultat združevanja v novem stolpcu.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Združi vrstice tabele `table1` z vrsticami tabele `table2` glede na delno ujemanje vrednosti stolpcev s ključem, ki jih izbereta `key1` (za `table1`) in `key2` (za `table2`). Rezultati so vrnjeni v nov stolpec z imenom `newColumnName`.

Delno ujemanje je primerjava, ki ne temelji na enakosti besedila, ampak na podrobnosti besedila.

Izbirna možnost `joinKind` določa vrsto združevanja, ki ga želite izvesti. Privzeto je izvedeno levo zunanje združevanje, če parameter `joinKind` ni določen. Možnosti vključujejo:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Vključuje lahko izbirni nabor parametrov `joinOptions`, s katerim določite način primerjave stolpcev s ključem. Možnosti vključujejo:

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
Table.FuzzyNestedJoin(
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
    "NestedTable",
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
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
