---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Führt für angegebene Spalten einen Fuzzyjoin zwischen Tabellen aus und stellt das Join-Ergebnis in einer neuen Spalte bereit.


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

Verknüpft die Zeilen von "<code>table1</code>" mit den Zeilen von "<code>table2</code>". Grundlage hierfür bildet eine Fuzzyübereinstimmung der Werte der Schlüsselspalten, die durch "<code>key1</code>" (für "<code>table1</code>") und "<code>key2</code>" (für "<code>table2</code>") ausgewählt wurden. Die Ergebnisse werden in einer neuen Spalte namens "<code>newColumnName</code>" zurückgegeben.<br />Die Fuzzyübereinstimmung ist ein Vergleich, der eher auf Ähnlichkeit als auf genauer Übereinstimmung des Texts beruht.<br />"<code>joinKind</code>" (optional) legt die Art des durchzuführenden Joins fest. Standardmäßig wird ein linker äußerer Join durchgeführt, wenn "<code>joinKind</code>" nicht angegeben ist. Verfügbare Optionen:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Um festzulegen, wie die Schlüsselspalten verglichen werden sollen, kann ein optionaler <code>joinOptions</code>-Satz eingeschlossen werden. Verfügbare Optionen:    <ul><li><code>ConcurrentRequests</code> : Eine Zahl zwischen 1 und 8, die die Anzahl von parallelen Threads angibt, die f&#252;r Fuzzy&#252;bereinstimmungen verwendet werden sollen. Der Standardwert ist&#160;1.</li><li><code>Culture</code> : Erm&#246;glicht den Abgleich von Datens&#228;tzen basierend auf kulturspezifischen Regeln. Es kann sich um einen beliebigen g&#252;ltigen Kulturnamen handelt. Die Culture-Option &quot;ja-JP&quot; beispielsweise gleicht Datens&#228;tze basierend auf der japanischen Kultur ab. Der Standardwert ist &quot;&quot;. Dieser Wert gruppiert Datens&#228;tze basierend auf der invarianten englischen Kultur.</li><li><code>IgnoreCase</code> : Ein logischer Wert (TRUE/FALSE), der einen Schl&#252;sselabgleich ohne Unterscheidung nach Gro&#223;-/Kleinschreibung erm&#246;glicht. Bei Festlegung auf TRUE stimmt z.&#160;B. &quot;Fliegen&quot; mit &quot;fliegen&quot; &#252;berein. Der Standardwert ist TRUE.</li><li><code>IgnoreSpace</code> : Ein logischer Wert (TRUE/FALSE), der das Kombinieren von Textteilen erm&#246;glicht, um &#220;bereinstimmungen zu finden. Bei Festlegung auf TRUE stimmt z.&#160;B. &quot;Fliegen&quot; mit &quot;Flie gen&quot; &#252;berein. Der Standardwert ist TRUE.</li><li><code>NumberOfMatches</code> : Eine ganze Zahl, die die Angabe maximale Anzahl &#252;bereinstimmender Zeilen angibt, die f&#252;r jede Eingabezeile zur&#252;ckgegeben werden k&#246;nnen. Beispielsweise gibt der Wert&#160;1 f&#252;r jede Eingabezeile h&#246;chstens eine &#252;bereinstimmende Zeile zur&#252;ck. Wird diese Option nicht angegeben, werden alle &#252;bereinstimmenden Zeilen zur&#252;ckgegeben.</li><li><code>SimilarityColumnName</code> : Ein Name f&#252;r die Spalte, die die &#196;hnlichkeit zwischen einem Eingabewert und dem repr&#228;sentativen Wert f&#252;r diese Eingabe angibt. Der Standardwert ist NULL. In diesem Fall wird keine neue Spalte f&#252;r &#196;hnlichkeiten hinzugef&#252;gt.</li><li><code>Threshold</code> : Eine Zahl zwischen 0,00 und 1,00, welche den &#196;hnlichkeitswert angibt, bei dem zwei Werte verglichen werden.    Beispiel: „Trauben“ und „Trauen“ (fehlendes „b“) werden nur dann abgeglichen, wenn diese Option auf weniger als 0,90 festgelegt ist.    Ein Schwellenwert von 1,00 l&#228;sst nur exakte &#220;bereinstimmungen zu.    (Beachten Sie, dass eine unscharfe „exakte &#220;bereinstimmung“ Unterschiede wie Gro&#223;-/Kleinschreibung, Wortreihenfolge und Interpunktion ignorieren kann.)    Der Standardwert ist 0,80.</li><li><code>TransformationTable</code> : Eine Tabelle, die den Abgleich von Datens&#228;tzen basierend auf benutzerdefinierten Wertzuordnungen erm&#246;glicht. Sie sollte die Spalten &quot;Von&quot; und &quot;Bis&quot; enthalten. &quot;Fliegen&quot; stimmt z.&#160;B. mit &quot;M&#252;cken&quot; &#252;berein, wenn eine Transformationstabelle bereitgestellt wird, deren Spalte &quot;Von&quot; das Wort &quot;Fliegen&quot; und deren Spalte &quot;Bis&quot; das Wort &quot;M&#252;cken&quot; enth&#228;lt. Beachten Sie, dass die Transformation auf alle Vorkommen des Texts in der Transformationstabelle angewendet wird. Bei der obigen Transformationstabelle stimmt &quot;Fliegen sind l&#228;stig&quot; auch mit &quot;M&#252;cken sind l&#228;stig&quot; &#252;berein.</li></ul><br />


## Examples

### Example #1 
Linker innerer Fuzzyjoin zweier Tabellen basierend auf [FirstName]
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
