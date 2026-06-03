---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Lägger till en ny kolumn med representativa värden som uppnås genom att fuzzy-gruppera värden i den angivna kolumnen i tabellen.


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

Lägger till en ny kolumn `newColumnName` i `table` med representativa värden för `columnName`. Representativa värden uppnås genom att en partiell matchning utförs av värdena i `columnName` för varje rad.

En valfri uppsättning av `options` kan användas för att ange hur nyckelkolumnerna ska jämföras. Alternativen är:

-   `Culture` : Gör att poster kan grupperas tillsammans baserat på kulturspecifika regler. Det kan vara vilket giltigt kulturnamn som helst. Kulturalternativet ja-JP grupperar till exempel poster baserat på den japanska kulturen. Standardvärdet är "", vilket grupperar utifrån den invarianta engelska kulturen.
-   `IgnoreCase` : Ett logiskt värde (sant/falskt) som gör att du kan utföra icke-skiftlägeskänsliga grupperingar. När det är sant grupperas till exempel Druvor tillsammans med druvor. Standardvärdet är sant.
-   `IgnoreSpace` : Ett logiskt värde (sant/falskt) som gör att du kan kombinera textdelar för att hitta grupperingar. När det är sant grupperas till exempel Dru vor tillsammans med Druvor. Standardvärdet är sant.
-   `SimilarityColumnName` : Ett namn på kolumnen som visar likheten mellan ett indatavärde och det representativa värdet för den inmatningen. Standardvärdet är null vilket innebär att ingen ny kolumn för likheter kommer att läggas till.
-   `Threshold` : Ett tal mellan 0,00 och 1,00 som anger likhetspoängen där två värden ska grupperas. "Vindruvor" och "Vindruor" (som saknar "v") grupperas bara tillsammans om det här alternativet är inställt på mindre än 0,90. Ett tröskelvärde på 1,00 tillåter bara exakta matchningar. (Observera att en fuzzy "exakt matchning" kan ignorera skillnader som skiftläge, ordordning och skiljetecken.) Standardvärdet är 0,80.
-   `TransformationTable` : En tabell där poster kan grupperas baserat på anpassade värdemappningar. Den måste innehålla kolumnerna Från och Till. Druvor grupperas till exempel med Russin om en omvandlingstabell har angetts där Från-kolumnen innehåller Druvor och Till-kolumnen innehåller Russin. Observera att omvandlingen tillämpas på alla förekomster av texten i omvandlingstabellen. Med ovanstående omvandlingstabell grupperas även Druvor är söta, med Russin är söta.


## Examples

### Example #1
Hitta representativa värden för medarbetarnas platsinformation.
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
