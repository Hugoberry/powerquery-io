---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Hiermee wordt een fuzzy join uitgevoerd tussen tabellen voor de opgegeven kolommen en wordt het resultaat van de join in een nieuwe kolom weergegeven.


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

Hiermee worden de rijen van <code>table1</code> gekoppeld met de rijen van <code>table2</code> op basis van fuzzy overeenkomsten voor de waarden van de sleutelkolommen die zijn geselecteerd door <code>key1</code> (voor <code>table1</code>) en <code>key2</code> (voor <code>table2</code>). De resultaten worden geretourneerd in een nieuwe kolom met de naam <code>newColumnName</code>.<br />Bij fuzzy overeenkomsten wordt gezocht naar een vergelijking op basis van vergelijkbaarheid van tekst in plaats van gelijkheid van tekst.<br />Met het optionele item <code>joinKind</code> wordt het soort join opgegeven dat moet worden uitgevoerd. Standaard wordt een left outer join uitgevoerd als er geen waarde voor <code>joinKind</code> is opgegeven. Opties zijn onder andere:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Een optionele set van <code>joinOptions</code> kan worden opgenomen om aan te geven hoe de sleutelkolommen moeten worden vergeleken. Opties zijn onder andere:    <ul><li><code>ConcurrentRequests</code> : Een getal tussen 1 en 8 waarmee het aantal parallelle threads wordt opgegeven dat moet worden gebruikt voor fuzzy overeenkomsten. De standaardwaarde is 1.</li><li><code>Culture</code> : Hiermee kunt u overeenkomende records zoeken op basis van cultuurspecifieke regels. Dit kan elke geldige cultuurnaam zijn. Met de cultuuroptie nl-NL worden overeenkomende records bijvoorbeeld gezocht op basis van de Nederlandse cultuur. De standaardwaarde is &quot;&quot;, waarbij wordt gezocht naar overeenkomsten op basis van de niet-variabele Engelse cultuur.</li><li><code>IgnoreCase</code> : Een logische waarde (waar/onwaar) voor niet-hoofdlettergevoelige sleutelovereenkomsten. Als de waarde op waar is ingesteld, is &#39;Druiven&#39; bijvoorbeeld een overeenkomst met &#39;druiven&#39;. De standaardwaarde is waar.</li><li><code>IgnoreSpace</code> : Een logische waarde (waar/onwaar) voor het combineren van tekstonderdelen om naar overeenkomsten te zoeken. Als de waarde op waar is ingesteld, is &#39;Drui ven&#39; bijvoorbeeld een overeenkomst voor &#39;druiven&#39;. De standaardwaarde is waar.</li><li><code>NumberOfMatches</code> : Een geheel getal waarmee het maximumaantal overeenkomende rijen dat kan worden geretourneerd, wordt opgegeven voor iedere invoerrij. Met de waarde 1 wordt bijvoorbeeld maximaal &#233;&#233;n overeenkomende rij geretourneerd voor elke rij met invoer. Als deze optie niet is opgegeven, worden alle overeenkomende rijen geretourneerd.</li><li><code>SimilarityColumnName</code> : Een naam voor de kolom waarin de overeenkomst wordt weergegeven tussen een invoerwaarde en de representatieve waarde voor die invoer. De standaardwaarde is null. In dat geval wordt er geen nieuwe kolom voor overeenkomsten toegevoegd.</li><li><code>Threshold</code> : Een getal tussen 0,00 en 1,00 dat de overeenkomstscore aangeeft waarbij twee waarden worden vergeleken. Bijvoorbeeld, &#39;Druiven&#39; en &#39;Druien&#39; (de &#39;v&#39; ontbreekt) komen alleen overeen als deze optie is ingesteld op minder dan 0,90. Een drempel van 1,00 staat alleen exacte overeenkomsten toe. (Merk op dat een vage &#39;exacte overeenkomst&#39; verschillen zoals hoofdletters, woordvolgorde en interpunctie kan negeren.) De standaardwaarde is 0,80.</li><li><code>TransformationTable</code> : Een tabel waarmee u overeenkomende records kunt zoeken op basis van aangepaste waardetoewijzingen. De tabel moet een kolom Van en een kolom Naar bevatten. Zo wordt &#39;Druiven&#39; gevonden als overeenkomst voor &#39;Rozijnen&#39; als er een transformatietabel wordt opgegeven met in de kolom Van de waarde &#39;Druiven&#39; en de in kolom Naar de waarde &#39;Rozijnen&#39;. De transformatie wordt toegepast op alle instanties van de tekst in de transformatietabel. Met de bovenstaande transformatietabel is &#39;Druiven zijn zoet&#39; dus ook een overeenkomst voor &#39;Rozijnen zijn zoet&#39;.</li></ul><br />


## Examples

### Example #1 
Left inner fuzzy join voor twee tabellen op basis van [FirstName]
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
