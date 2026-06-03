---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Grupperer rækker i tabellen ud fra fuzzy matching af nøgler.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Grupperer rækkerne for `table` efter fuzzily matchende værdier i den angivne kolonne, `key`, for hver række. For hver gruppe oprettes en post, der indeholder nøglekolonnerne (og deres værdier) sammen med alle akkumulerede kolonner, som er angivet af `aggregatedColumns`. Denne funktion kan ikke garantere returnering af en fast rækkefølge af rækker.

Der kan inkluderes et valgfrit sæt af `options` for at angive, hvordan nøglekolonnerne skal sammenlignes. Indstillingerne omfatter:

-   `Culture` : Gør det muligt at gruppere poster baseret på kulturspecifikke regler. Det kan være et vilkårligt gyldigt kulturnavn. En kulturindstilling af typen "ja-JP" grupperer for eksempel på basis af den japanske kultur. Standardværdien er "", hvilket grupperer baseret på den engelske (invariable) kultur.
-   `IgnoreCase` : En logisk værdi (sand/falsk), der tillader skelnen mellem store og små bogstaver. Hvis værdien er sand, bliver "druer" grupperet med "druer". Standardværdien er sand.
-   `IgnoreSpace` : En logisk værdi (sand/falsk), der gør det muligt at kombinere tekstdele for at finde grupper. Hvis true, bliver "Dru er " grupperet med "druer". Standardværdien er sand.
-   `SimilarityColumnName` : Et navn på kolonnen, der viser ligheden mellem en inputværdi og den repræsentative værdi for inputtet. Standardværdien er null, hvilket betyder, at der ikke tilføjes en ny kolonne for ligheder.
-   `Threshold` : Et tal mellem 0,00 og 1,00, der angiver den lighedsscore, hvor to værdier grupperes. For eksempel er "druer" og "drer" (manglende "u") kun grupperes sammen, hvis denne indstilling er angivet til mindre end 0,90. En grænseværdi på 1,00 tillader kun eksakte match. (Bemærk, at et fuzzy "eksakt match" kan ignorere forskelle som f.eks. store og små bogstaver, ordrækkefølge og tegnsætning.) Standardværdien er 0,80.
-   `TransformationTable` : En tabel, der tillader gruppering af poster baseret på brugerdefinerede værditilknytninger. Den skal indeholde kolonnerne "fra" og "til". For eksempel bliver "Druer" grupperet med "Rosiner", hvis der findes en transformationstabel med kolonnen "fra", som indeholder "Druer", og kolonnen "til", der indeholder "Rosiner". Bemærk, at transformationen bliver anvendt på alle forekomster af teksten i transformationstabellen. Med ovenstående transformationstabel bliver "Druer er søde" også grupperet med "Rosiner er søde".


## Examples

### Example #1
Group the table adding an aggregate column \[Count\] that contains the number of employees in each location (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
