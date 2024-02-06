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

Kopplar samman raderna i <code>table1</code> med raderna i <code>table2</code> baserat på en partiell matchning av värdena i de nyckelkolumner som valts av <code>key1</code> (för <code>table1</code>) och <code>key2</code> (för <code>table2</code>).<br />Partiell matchning är en jämförelse som baseras på liknelser i texten snarare än på exakt likhet.<br />Som standard utförs en inre koppling men även en valfri <code>joinKind</code> kan användas för att ange typen av koppling. Alternativen är:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />En valfri uppsättning <code>joinOptions</code> kan läggas till för att ange hur nyckelkolumnerna ska jämföras. Alternativen är:    <ul><li><code>ConcurrentRequests</code> : Ett tal mellan 1 och 8 som anger antalet parallella tr&#229;dar som ska anv&#228;ndas f&#246;r partiell matchning. Standardv&#228;rdet &#228;r 1.</li><li><code>Culture</code> : G&#246;r att poster kan matchas baserat p&#229; kulturspecifika regler. Det kan vara vilket giltigt kulturnamn som helst. Kulturalternativet ja-JP matchar till exempel poster baserat p&#229; den japanska kulturen. Standardv&#228;rdet &#228;r &quot;&quot;, vilket matchar utifr&#229;n den invarianta engelska kulturen.</li><li><code>IgnoreCase</code> : Ett logiskt v&#228;rde (sant/falskt) som g&#246;r att man kan utf&#246;ra icke-skiftl&#228;gesk&#228;nsliga matchningar. N&#228;r det &#228;r sant matchas till exempel Druvor med druvor. Standardv&#228;rdet &#228;r sant.</li><li><code>IgnoreSpace</code> : Ett logiskt v&#228;rde (sant/falskt) som g&#246;r att du kan kombinera textdelar f&#246;r att hitta matchningar. N&#228;r det &#228;r sant matchas till exempel Dru vor med Druvor. Standardv&#228;rdet &#228;r sant.</li><li><code>NumberOfMatches</code> : Ett heltal som anger h&#246;gsta antal matchande rader som kan returneras f&#246;r varje indatarad. V&#228;rdet 1 returnerar exempelvis h&#246;gst en matchande rad f&#246;r varje indatarad. Om alternativet inte anges returneras alla matchande rader.</li><li><code>SimilarityColumnName</code> : Ett namn p&#229; kolumnen som visar likheten mellan ett indatav&#228;rde och det representativa v&#228;rdet f&#246;r den inmatningen. Standardv&#228;rdet &#228;r null vilket inneb&#228;r att ingen ny kolumn f&#246;r likheter kommer att l&#228;ggas till.</li><li><code>Threshold</code> : Ett tal mellan 0,00 och 1,00 som anger likhetspo&#228;ngen d&#228;r tv&#229; v&#228;rden ska grupperas.    &quot;Vindruvor&quot; och &quot;Vindruor&quot; (som saknar &quot;v&quot;) grupperas bara tillsammans om det h&#228;r alternativet &#228;r inst&#228;llt p&#229; mindre &#228;n 0,90.    Ett tr&#246;skelv&#228;rde p&#229; 1,00 till&#229;ter bara exakta matchningar.    (Observera att en fuzzy &quot;exakt matchning&quot; kan ignorera skillnader som skiftl&#228;ge, ordordning och skiljetecken.)    Standardv&#228;rdet &#228;r 0,80.</li><li><code>TransformationTable</code> : En tabell d&#228;r poster kan matchas baserat p&#229; anpassade v&#228;rdemappningar. Den m&#229;ste inneh&#229;lla kolumnerna Fr&#229;n och Till. Druvor matchas till exempel med Russin om en omvandlingstabell har angetts d&#228;r Fr&#229;n-kolumnen inneh&#229;ller Druvor och Till-kolumnen inneh&#229;ller Russin. Observera att omvandlingen till&#228;mpas p&#229; alla f&#246;rekomster av texten i omvandlingstabellen. Med ovanst&#229;ende omvandlingstabell matchas &#228;ven Druvor &#228;r s&#246;ta, med Russin &#228;r s&#246;ta.</li></ul><br />    


## Examples

### Example #1 
Vänster inre fuzzy-koppling mellan två tabeller baserat på [FirstName]
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
