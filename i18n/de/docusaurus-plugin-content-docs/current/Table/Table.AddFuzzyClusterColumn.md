---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Hiermit wird eine neue Spalte mit repräsentativen Werten hinzugefügt, die durch Fuzzygruppierungswerte der angegebenen Spalte in der Tabelle abgerufen wurden.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Fügt "<code>table</code>" eine neue Spalte "<code>newColumnName</code>" mit repräsentativen Werten von "<code>columnName</code>" hinzu, indem für jede Zeile Fuzzyübereinstimmungen der Werte in "<code>columnName</code>" gesucht werden.    Ein optionaler <code>options</code>-Satz kann einbezogen werden, um anzugeben, wie die Schlüsselspalten verglichen werden sollen. Verfügbare Optionen:     <ul><li><code>Culture</code> : Erm&#246;glicht das Gruppieren von Datens&#228;tzen basierend auf kulturspezifischen Regeln. Es kann sich um einen beliebigen g&#252;ltigen Kulturnamen handelt. Beispielsweise gruppiert die Culture-Option &quot;ja-JP&quot; Datens&#228;tze basierend auf der japanischen Kultur. Der Standardwert ist &quot;&quot;. Dieser Wert gruppiert Datens&#228;tze basierend auf der invarianten englischen Kultur.</li><li><code>IgnoreCase</code> : Ein logischer Wert (TRUE/FALSE), der eine Schl&#252;sselgruppierung ohne Unterscheidung nach Gro&#223;-/Kleinschreibung erm&#246;glicht. Bei Festlegung auf TRUE wird z.&#160;B. &quot;Fliegen&quot; mit &quot;fliegen&quot; gruppiert. Der Standardwert ist TRUE.</li><li><code>IgnoreSpace</code> : Ein logischer Wert (TRUE/FALSE), der das Kombinieren von Textteilen erm&#246;glicht, um Gruppen zu finden. Bei Festlegung auf TRUE wird z.&#160;B. &quot;Fliegen&quot; mit &quot;Flie gen&quot; gruppiert. Der Standardwert ist TRUE.</li><li><code>SimilarityColumnName</code> : Ein Name f&#252;r die Spalte, die die &#196;hnlichkeit zwischen einem Eingabewert und dem repr&#228;sentativen Wert f&#252;r diese Eingabe angibt. Der Standardwert ist NULL. In diesem Fall wird keine neue Spalte f&#252;r &#196;hnlichkeiten hinzugef&#252;gt.</li><li><code>Threshold</code> : Eine Zahl zwischen 0,00 und 1,00, welche den &#196;hnlichkeitswert angibt, bei dem zwei Werte gruppiert werden.    Beispiel: „Trauben“ und „Trauen“ (fehlendes „b“) werden nur dann gruppiert, wenn diese Option auf weniger als 0,90 festgelegt ist.    Ein Schwellenwert von 1,00 l&#228;sst nur exakte &#220;bereinstimmungen zu.    (Beachten Sie, dass eine unscharfe „exakte &#220;bereinstimmung“ Unterschiede wie Gro&#223;-/Kleinschreibung, Wortreihenfolge und Interpunktion ignorieren kann.)    Der Standardwert ist 0,80.</li><li><code>TransformationTable</code> : Eine Tabelle, die das Gruppieren von Datens&#228;tzen basierend auf benutzerdefinierten Wertzuordnungen erm&#246;glicht. Sie sollte die Spalten &quot;Von&quot; und &quot;Bis&quot; enthalten. &quot;Fliegen&quot; wird z.&#160;B. mit &quot;M&#252;cken&quot; gruppiert, wenn eine Transformationstabelle bereitgestellt wird, deren Spalte &quot;Von&quot; das Wort &quot;Fliegen&quot; und deren Spalte &quot;Bis&quot; das Wort &quot;M&#252;cken&quot; enth&#228;lt. Beachten Sie, dass die Transformation auf alle Vorkommen des Texts in der Transformationstabelle angewendet wird. Bei der obigen Transformationstabelle wird &quot;Fliegen sind l&#228;stig&quot; auch mit &quot;M&#252;cken sind l&#228;stig&quot; gruppiert.</li></ul><br />    


## Examples

### Example #1 
Ermittelt die repräsentativen Werte für den Standort der Mitarbeiter.
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
