---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Joinforbinder rækkerne fra de to tabeller, der fuzzy-matcher, på baggrund af de angivne nøgler.


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

Forbinder rækkerne i `table1` med rækkerne i `table2` på baggrund af fuzzy-matching af de nøglekolonner, der er valgt af `key1` (for `table1`) og `key2` (for `table2`).

Fuzzy-matching er en sammenligning baseret på tekstens enshed snarere end lighed.

Der oprettes som standard en indre forbindelse, men der kan inkluderes en valgfri `joinKind` for at angive typen af forbindelse. Indstillinger omfatter:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Et valgfrit sæt af `joinOptions` kan inkluderes for at angive, hvordan nøglekolonnerne skal sammenlignes. Indstillingerne omfatter:

-   `ConcurrentRequests` : Et tal mellem 1 og 8, der angiver det antal parallelle tråde, som skal bruges til fuzzymatching. Standardværdien er 1.
-   `Culture` : Tillader identiske poster baseret på kulturspecifikke regler. Det kan være et vilkårligt gyldigt kulturnavn. For eksempel matcher en Culture-indstilling på "ja-JP" poster baseret på den japanske kultur. Standardværdien er "", som matcher baseret på den engelske invariable kultur.
-   `IgnoreCase` : En logisk værdi (sand/falsk), der tillader forskels søgning efter store og små bogstaver. Hvis værdien er sand, matches "Druer" med "druer". Standardværdien er sand.
-   `IgnoreSpace` : En logisk værdi (sand/falsk), der gør det muligt at kombinere tekstdele for at finde forekomster. Hvis true, matches "Dru er" med "Druer". Standardværdien er sand.
-   `NumberOfMatches` : Et heltal, der angiver det maksimale antal matchende rækker, der kan returneres for hver inputrække. For eksempel returnerer en værdi på 1 højst én tilsvarende række for hver inputrække. Hvis denne indstilling ikke er angivet, returneres alle matchende rækker.
-   `SimilarityColumnName` : Et navn på kolonnen, der viser ligheden mellem en inputværdi og den repræsentative værdi for inputtet. Standardværdien er null, hvilket betyder, at der ikke tilføjes en ny kolonne for ligheder.
-   `Threshold` : Et tal mellem 0,00 og 1,00, der angiver den lighedsscore, som to værdier matches med. For eksempel er "druer" og "drer" (manglende "u") kun ens, hvis denne indstilling er angivet til mindre end 0,90. En grænseværdi på 1,00 tillader kun eksakte match. (Bemærk, at et fuzzy "eksakt match" kan ignorere forskelle som f.eks. store og små bogstaver, ordrækkefølge og tegnsætning.) Standardværdien er 0,80.
-   `TransformationTable` : En tabel, der tillader matchende poster baseret på brugerdefinerede værditilknytninger. Den skal indeholde kolonnerne "Fra" og "Til". For eksempel bliver "Druer" matchet med "Rosiner", hvis der findes en transformationstabel med kolonnen "Fra", som indeholder "Druer", og kolonnen "Til", der indeholder "Rosiner". Bemærk, at transformationen bliver anvendt på alle forekomster af teksten i transformationstabellen. Med ovenstående transformationstabel bliver "Druer er søde", også matchet med "Rosiner er søde".


## Examples

### Example #1
Venstre indre fuzzy-joinforbindelse af to tabeller baseret på \[FirstName\]
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
