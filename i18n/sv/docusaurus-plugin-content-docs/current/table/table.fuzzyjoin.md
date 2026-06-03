---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Kopplar raderna från de två tabeller som fuzzy-matchats utifrån de angivna nycklarna.


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

Kopplar samman raderna i `table1` med raderna i `table2` baserat på en partiell matchning av värdena i de nyckelkolumner som valts av `key1` (för `table1`) och `key2` (för `table2`).

Partiell matchning är en jämförelse som baseras på liknelser i texten snarare än på exakt likhet.

Som standard utförs en inre koppling men även en valfri `joinKind` kan användas för att ange typen av koppling. Alternativen är:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

En valfri uppsättning `joinOptions` kan läggas till för att ange hur nyckelkolumnerna ska jämföras. Alternativen är:

-   `ConcurrentRequests` : Ett tal mellan 1 och 8 som anger antalet parallella trådar som ska användas för partiell matchning. Standardvärdet är 1.
-   `Culture` : Gör att poster kan matchas baserat på kulturspecifika regler. Det kan vara vilket giltigt kulturnamn som helst. Kulturalternativet ja-JP matchar till exempel poster baserat på den japanska kulturen. Standardvärdet är "", vilket matchar utifrån den invarianta engelska kulturen.
-   `IgnoreCase` : Ett logiskt värde (sant/falskt) som gör att man kan utföra icke-skiftlägeskänsliga matchningar. När det är sant matchas till exempel Druvor med druvor. Standardvärdet är sant.
-   `IgnoreSpace` : Ett logiskt värde (sant/falskt) som gör att du kan kombinera textdelar för att hitta matchningar. När det är sant matchas till exempel Dru vor med Druvor. Standardvärdet är sant.
-   `NumberOfMatches` : Ett heltal som anger högsta antal matchande rader som kan returneras för varje indatarad. Värdet 1 returnerar exempelvis högst en matchande rad för varje indatarad. Om alternativet inte anges returneras alla matchande rader.
-   `SimilarityColumnName` : Ett namn på kolumnen som visar likheten mellan ett indatavärde och det representativa värdet för den inmatningen. Standardvärdet är null vilket innebär att ingen ny kolumn för likheter kommer att läggas till.
-   `Threshold` : Ett tal mellan 0,00 och 1,00 som anger likhetspoängen där två värden ska grupperas. "Vindruvor" och "Vindruor" (som saknar "v") grupperas bara tillsammans om det här alternativet är inställt på mindre än 0,90. Ett tröskelvärde på 1,00 tillåter bara exakta matchningar. (Observera att en fuzzy "exakt matchning" kan ignorera skillnader som skiftläge, ordordning och skiljetecken.) Standardvärdet är 0,80.
-   `TransformationTable` : En tabell där poster kan matchas baserat på anpassade värdemappningar. Den måste innehålla kolumnerna Från och Till. Druvor matchas till exempel med Russin om en omvandlingstabell har angetts där Från-kolumnen innehåller Druvor och Till-kolumnen innehåller Russin. Observera att omvandlingen tillämpas på alla förekomster av texten i omvandlingstabellen. Med ovanstående omvandlingstabell matchas även Druvor är söta, med Russin är söta.


## Examples

### Example #1
Vänster inre fuzzy-koppling mellan två tabeller baserat på \[FirstName\]
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
