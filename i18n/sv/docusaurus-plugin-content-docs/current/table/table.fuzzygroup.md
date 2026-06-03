---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Grupperar rader i tabellen baserat på fuzzy-matchning av nycklar.


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

Grupperar raderna i `table` genom att partiellt matcha värden i den angivna kolumnen, `key`, för varje rad. För varje grupp skapas en post som innehåller nyckelkolumnerna (och deras värden) tillsammans med eventuella sammanställda kolumner angivna av `aggregatedColumns`. Den här funktionen garanterar inte att raderna returneras i en fast ordning.

En valfri uppsättning `options` kan användas för att ange hur nyckelkolumnerna ska jämföras. Alternativen är:

-   `Culture` : Gör att poster kan grupperas tillsammans baserat på kulturspecifika regler. Det kan vara vilket giltigt kulturnamn som helst. Kulturalternativet ja-JP grupperar till exempel poster baserat på den japanska kulturen. Standardvärdet är "", vilket grupperar utifrån den invarianta engelska kulturen.
-   `IgnoreCase` : Ett logiskt värde (sant/falskt) som gör att du kan utföra icke-skiftlägeskänsliga grupperingar. När det är sant grupperas till exempel Druvor tillsammans med druvor. Standardvärdet är sant.
-   `IgnoreSpace` : Ett logiskt värde (sant/falskt) som gör att du kan kombinera textdelar för att hitta grupperingar. När det är sant grupperas till exempel Dru vor tillsammans med Druvor. Standardvärdet är sant.
-   `SimilarityColumnName` : Ett namn på kolumnen som visar likheten mellan ett indatavärde och det representativa värdet för den inmatningen. Standardvärdet är null vilket innebär att ingen ny kolumn för likheter kommer att läggas till.
-   `Threshold` : Ett tal mellan 0,00 och 1,00 som anger likhetspoängen där två värden ska grupperas. "Vindruvor" och "Vindruor" (som saknar "v") grupperas bara tillsammans om det här alternativet är inställt på mindre än 0,90. Ett tröskelvärde på 1,00 tillåter bara exakta matchningar. (Observera att en fuzzy "exakt matchning" kan ignorera skillnader som skiftläge, ordordning och skiljetecken.) Standardvärdet är 0,80.
-   `TransformationTable` : En tabell där poster kan grupperas baserat på anpassade värdemappningar. Den måste innehålla kolumnerna Från och Till. Druvor grupperas till exempel med Russin om en omvandlingstabell har angetts där Från-kolumnen innehåller Druvor och Till-kolumnen innehåller Russin. Observera att omvandlingen tillämpas på alla förekomster av texten i omvandlingstabellen. Med ovanstående omvandlingstabell grupperas även Druvor är söta, med Russin är söta.


## Examples

### Example #1
Gruppera tabellen och lägg till en mängdkolumn \[Count\] som innehåller antalet anställda på varje plats (`each Table.RowCount(_)`).
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
