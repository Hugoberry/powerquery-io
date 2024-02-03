---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Udfører en fuzzy-joinforbindelse mellem tabeller på angivne kolonner og opretter joinresultatet i en ny kolonne.


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


## Details

Joinforbinder rækkerne i <code>table1</code> med rækkerne i <code>table2</code> på baggrund af fuzzy-matching af værdierne i de nøglekolonner, der er valgt af <code>key1</code> (for <code>table1</code>) og <code>key2</code> (for <code>table2</code>). Resultaterne returneres i en ny kolonne, der hedder <code>newColumnName</code>.<br />Fuzzy-matching er en sammenligning, som er baseret på tekstens enshed i stedet for tekstens lighed.<br />Den valgfrie værdi <code>joinKind</code> angiver typen af joinforbindelse, der skal udføres. Der udføres som standard en venstre ydre joinforbindelse, hvis der ikke er angivet en <code>joinKind</code>. Valgmulighederne omfatter:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Et valgfrit sæt af <code>joinOptions</code> kan inkluderes for at angive, hvordan nøglekolonnerne skal sammenlignes. Valgmulighederne omfatter:    <ul><li><code>ConcurrentRequests</code> : Et tal mellem 1 og 8, der angiver det antal parallelle tr&#229;de, som skal bruges til fuzzymatching. Standardv&#230;rdien er 1.</li><li><code>Culture</code> : Tillader identiske poster baseret p&#229; kulturspecifikke regler. Det kan v&#230;re et vilk&#229;rligt gyldigt kulturnavn. For eksempel matcher en Culture-indstilling p&#229; &quot;ja-JP&quot; poster baseret p&#229; den japanske kultur. Standardv&#230;rdien er &quot;&quot;, som matcher baseret p&#229; den engelske invariable kultur.</li><li><code>IgnoreCase</code> : En logisk v&#230;rdi (sand/falsk), der tillader forskels s&#248;gning efter store og sm&#229; bogstaver. Hvis v&#230;rdien er sand, matches &quot;Druer&quot; med &quot;druer&quot;. Standardv&#230;rdien er sand.</li><li><code>IgnoreSpace</code> : En logisk v&#230;rdi (sand/falsk), der g&#248;r det muligt at kombinere tekstdele for at finde forekomster. Hvis true, matches &quot;Dru er&quot; med &quot;Druer&quot;. Standardv&#230;rdien er sand.</li><li><code>NumberOfMatches</code> : Et heltal, der angiver det maksimale antal matchende r&#230;kker, der kan returneres for hver inputr&#230;kke. For eksempel returnerer en v&#230;rdi p&#229; 1 h&#248;jst &#233;n tilsvarende r&#230;kke for hver inputr&#230;kke. Hvis denne indstilling ikke er angivet, returneres alle matchende r&#230;kker.</li><li><code>SimilarityColumnName</code> : Et navn p&#229; kolonnen, der viser ligheden mellem en inputv&#230;rdi og den repr&#230;sentative v&#230;rdi for inputtet. Standardv&#230;rdien er null, hvilket betyder, at der ikke tilf&#248;jes en ny kolonne for ligheder.</li><li><code>Threshold</code> : Et tal mellem 0,00 og 1,00, der angiver den lighedsscore, som to v&#230;rdier matches med.    For eksempel er &quot;druer&quot; og &quot;drer&quot; (manglende &quot;u&quot;) kun ens, hvis denne indstilling er angivet til mindre end 0,90.    En gr&#230;nsev&#230;rdi p&#229; 1,00 tillader kun eksakte match.    (Bem&#230;rk, at et fuzzy &quot;eksakt match&quot; kan ignorere forskelle som f.eks. store og sm&#229; bogstaver, ordr&#230;kkef&#248;lge og tegns&#230;tning.)    Standardv&#230;rdien er 0,80.</li><li><code>TransformationTable</code> : En tabel, der tillader matchende poster baseret p&#229; brugerdefinerede v&#230;rditilknytninger. Den skal indeholde kolonnerne &quot;Fra&quot; og &quot;Til&quot;. For eksempel bliver &quot;Druer&quot; matchet med &quot;Rosiner&quot;, hvis der findes en transformationstabel med kolonnen &quot;Fra&quot;, som indeholder &quot;Druer&quot;, og kolonnen &quot;Til&quot;, der indeholder &quot;Rosiner&quot;. Bem&#230;rk, at transformationen bliver anvendt p&#229; alle forekomster af teksten i transformationstabellen. Med ovenst&#229;ende transformationstabel bliver &quot;Druer er s&#248;de&quot;, ogs&#229; matchet med &quot;Rosiner er s&#248;de&quot;.</li></ul><br />


## Examples

### Example #1 
Venstre indre fuzzy-joinforbindelse af to tabeller baseret på [FirstName]
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
