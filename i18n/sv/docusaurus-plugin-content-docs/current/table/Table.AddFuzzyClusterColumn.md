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

Lägger till en ny kolumn <code>newColumnName</code> i <code>table</code> med representativa värden för <code>columnName</code>. Representativa värden uppnås genom att en partiell matchning utförs av värdena i <code>columnName</code> för varje rad.    En valfri uppsättning av <code>options</code> kan användas för att ange hur nyckelkolumnerna ska jämföras. Alternativen är:    <ul><li><code>Culture</code> : G&#246;r att poster kan grupperas tillsammans baserat p&#229; kulturspecifika regler. Det kan vara vilket giltigt kulturnamn som helst. Kulturalternativet ja-JP grupperar till exempel poster baserat p&#229; den japanska kulturen. Standardv&#228;rdet &#228;r &quot;&quot;, vilket grupperar utifr&#229;n den invarianta engelska kulturen.</li><li><code>IgnoreCase</code> : Ett logiskt v&#228;rde (sant/falskt) som g&#246;r att du kan utf&#246;ra icke-skiftl&#228;gesk&#228;nsliga grupperingar. N&#228;r det &#228;r sant grupperas till exempel Druvor tillsammans med druvor. Standardv&#228;rdet &#228;r sant.</li><li><code>IgnoreSpace</code> : Ett logiskt v&#228;rde (sant/falskt) som g&#246;r att du kan kombinera textdelar f&#246;r att hitta grupperingar. N&#228;r det &#228;r sant grupperas till exempel Dru vor tillsammans med Druvor. Standardv&#228;rdet &#228;r sant.</li><li><code>SimilarityColumnName</code> : Ett namn p&#229; kolumnen som visar likheten mellan ett indatav&#228;rde och det representativa v&#228;rdet f&#246;r den inmatningen. Standardv&#228;rdet &#228;r null vilket inneb&#228;r att ingen ny kolumn f&#246;r likheter kommer att l&#228;ggas till.</li><li><code>Threshold</code> : Ett tal mellan 0,00 och 1,00 som anger likhetspo&#228;ngen d&#228;r tv&#229; v&#228;rden ska grupperas.    &quot;Vindruvor&quot; och &quot;Vindruor&quot; (som saknar &quot;v&quot;) grupperas bara tillsammans om det h&#228;r alternativet &#228;r inst&#228;llt p&#229; mindre &#228;n 0,90.    Ett tr&#246;skelv&#228;rde p&#229; 1,00 till&#229;ter bara exakta matchningar.    (Observera att en fuzzy &quot;exakt matchning&quot; kan ignorera skillnader som skiftl&#228;ge, ordordning och skiljetecken.)    Standardv&#228;rdet &#228;r 0,80.</li><li><code>TransformationTable</code> : En tabell d&#228;r poster kan grupperas baserat p&#229; anpassade v&#228;rdemappningar. Den m&#229;ste inneh&#229;lla kolumnerna Fr&#229;n och Till. Druvor grupperas till exempel med Russin om en omvandlingstabell har angetts d&#228;r Fr&#229;n-kolumnen inneh&#229;ller Druvor och Till-kolumnen inneh&#229;ller Russin. Observera att omvandlingen till&#228;mpas p&#229; alla f&#246;rekomster av texten i omvandlingstabellen. Med ovanst&#229;ende omvandlingstabell grupperas &#228;ven Druvor &#228;r s&#246;ta, med Russin &#228;r s&#246;ta.</li></ul><br />    


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
