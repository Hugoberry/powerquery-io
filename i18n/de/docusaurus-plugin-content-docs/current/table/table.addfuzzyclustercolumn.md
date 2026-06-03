---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


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


## Remarks

Fügt "`table`" eine neue Spalte "`newColumnName`" mit repräsentativen Werten von "`columnName`" hinzu, indem für jede Zeile Fuzzyübereinstimmungen der Werte in "`columnName`" gesucht werden.

Ein optionaler `options`\-Satz kann einbezogen werden, um anzugeben, wie die Schlüsselspalten verglichen werden sollen. Verfügbare Optionen:

-   `Culture` : Ermöglicht das Gruppieren von Datensätzen basierend auf kulturspezifischen Regeln. Es kann sich um einen beliebigen gültigen Kulturnamen handelt. Beispielsweise gruppiert die Culture-Option "ja-JP" Datensätze basierend auf der japanischen Kultur. Der Standardwert ist "". Dieser Wert gruppiert Datensätze basierend auf der invarianten englischen Kultur.
-   `IgnoreCase` : Ein logischer Wert (TRUE/FALSE), der eine Schlüsselgruppierung ohne Unterscheidung nach Groß-/Kleinschreibung ermöglicht. Bei Festlegung auf TRUE wird z. B. "Fliegen" mit "fliegen" gruppiert. Der Standardwert ist TRUE.
-   `IgnoreSpace` : Ein logischer Wert (TRUE/FALSE), der das Kombinieren von Textteilen ermöglicht, um Gruppen zu finden. Bei Festlegung auf TRUE wird z. B. "Fliegen" mit "Flie gen" gruppiert. Der Standardwert ist TRUE.
-   `SimilarityColumnName` : Ein Name für die Spalte, die die Ähnlichkeit zwischen einem Eingabewert und dem repräsentativen Wert für diese Eingabe angibt. Der Standardwert ist NULL. In diesem Fall wird keine neue Spalte für Ähnlichkeiten hinzugefügt.
-   `Threshold` : Eine Zahl zwischen 0,00 und 1,00, welche den Ähnlichkeitswert angibt, bei dem zwei Werte gruppiert werden. Beispiel: „Trauben“ und „Trauen“ (fehlendes „b“) werden nur dann gruppiert, wenn diese Option auf weniger als 0,90 festgelegt ist. Ein Schwellenwert von 1,00 lässt nur exakte Übereinstimmungen zu. (Beachten Sie, dass eine unscharfe „exakte Übereinstimmung“ Unterschiede wie Groß-/Kleinschreibung, Wortreihenfolge und Interpunktion ignorieren kann.) Der Standardwert ist 0,80.
-   `TransformationTable` : Eine Tabelle, die das Gruppieren von Datensätzen basierend auf benutzerdefinierten Wertzuordnungen ermöglicht. Sie sollte die Spalten "Von" und "Bis" enthalten. "Fliegen" wird z. B. mit "Mücken" gruppiert, wenn eine Transformationstabelle bereitgestellt wird, deren Spalte "Von" das Wort "Fliegen" und deren Spalte "Bis" das Wort "Mücken" enthält. Beachten Sie, dass die Transformation auf alle Vorkommen des Texts in der Transformationstabelle angewendet wird. Bei der obigen Transformationstabelle wird "Fliegen sind lästig" auch mit "Mücken sind lästig" gruppiert.


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
