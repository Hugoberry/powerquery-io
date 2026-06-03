---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


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


## Remarks

Verknüpft die Zeilen von "`table1`" mit den Zeilen von "`table2`". Grundlage hierfür bildet eine Fuzzyübereinstimmung der Werte der Schlüsselspalten, die durch "`key1`" (für "`table1`") und "`key2`" (für "`table2`") ausgewählt wurden. Die Ergebnisse werden in einer neuen Spalte namens "`newColumnName`" zurückgegeben.

Die Fuzzyübereinstimmung ist ein Vergleich, der eher auf Ähnlichkeit als auf genauer Übereinstimmung des Texts beruht.

"`joinKind`" (optional) legt die Art des durchzuführenden Joins fest. Standardmäßig wird ein linker äußerer Join durchgeführt, wenn "`joinKind`" nicht angegeben ist. Verfügbare Optionen:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Um festzulegen, wie die Schlüsselspalten verglichen werden sollen, kann ein optionaler `joinOptions`\-Satz eingeschlossen werden. Verfügbare Optionen:

-   `ConcurrentRequests` : Eine Zahl zwischen 1 und 8, die die Anzahl von parallelen Threads angibt, die für Fuzzyübereinstimmungen verwendet werden sollen. Der Standardwert ist 1.
-   `Culture` : Ermöglicht den Abgleich von Datensätzen basierend auf kulturspezifischen Regeln. Es kann sich um einen beliebigen gültigen Kulturnamen handelt. Die Culture-Option "ja-JP" beispielsweise gleicht Datensätze basierend auf der japanischen Kultur ab. Der Standardwert ist "". Dieser Wert gruppiert Datensätze basierend auf der invarianten englischen Kultur.
-   `IgnoreCase` : Ein logischer Wert (TRUE/FALSE), der einen Schlüsselabgleich ohne Unterscheidung nach Groß-/Kleinschreibung ermöglicht. Bei Festlegung auf TRUE stimmt z. B. "Fliegen" mit "fliegen" überein. Der Standardwert ist TRUE.
-   `IgnoreSpace` : Ein logischer Wert (TRUE/FALSE), der das Kombinieren von Textteilen ermöglicht, um Übereinstimmungen zu finden. Bei Festlegung auf TRUE stimmt z. B. "Fliegen" mit "Flie gen" überein. Der Standardwert ist TRUE.
-   `NumberOfMatches` : Eine ganze Zahl, die die Angabe maximale Anzahl übereinstimmender Zeilen angibt, die für jede Eingabezeile zurückgegeben werden können. Beispielsweise gibt der Wert 1 für jede Eingabezeile höchstens eine übereinstimmende Zeile zurück. Wird diese Option nicht angegeben, werden alle übereinstimmenden Zeilen zurückgegeben.
-   `SimilarityColumnName` : Ein Name für die Spalte, die die Ähnlichkeit zwischen einem Eingabewert und dem repräsentativen Wert für diese Eingabe angibt. Der Standardwert ist NULL. In diesem Fall wird keine neue Spalte für Ähnlichkeiten hinzugefügt.
-   `Threshold` : Eine Zahl zwischen 0,00 und 1,00, welche den Ähnlichkeitswert angibt, bei dem zwei Werte verglichen werden. Beispiel: „Trauben“ und „Trauen“ (fehlendes „b“) werden nur dann abgeglichen, wenn diese Option auf weniger als 0,90 festgelegt ist. Ein Schwellenwert von 1,00 lässt nur exakte Übereinstimmungen zu. (Beachten Sie, dass eine unscharfe „exakte Übereinstimmung“ Unterschiede wie Groß-/Kleinschreibung, Wortreihenfolge und Interpunktion ignorieren kann.) Der Standardwert ist 0,80.
-   `TransformationTable` : Eine Tabelle, die den Abgleich von Datensätzen basierend auf benutzerdefinierten Wertzuordnungen ermöglicht. Sie sollte die Spalten "Von" und "Bis" enthalten. "Fliegen" stimmt z. B. mit "Mücken" überein, wenn eine Transformationstabelle bereitgestellt wird, deren Spalte "Von" das Wort "Fliegen" und deren Spalte "Bis" das Wort "Mücken" enthält. Beachten Sie, dass die Transformation auf alle Vorkommen des Texts in der Transformationstabelle angewendet wird. Bei der obigen Transformationstabelle stimmt "Fliegen sind lästig" auch mit "Mücken sind lästig" überein.


## Examples

### Example #1
Linker innerer Fuzzyjoin zweier Tabellen basierend auf \[FirstName\]
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
