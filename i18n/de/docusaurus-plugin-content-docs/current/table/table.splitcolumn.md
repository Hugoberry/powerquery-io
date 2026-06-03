---
title: Table.SplitColumn
---

# Table.SplitColumn


Teilt die angegebene Spalte unter Verwendung der angegebenen Aufteilungsfunktion in eine Gruppe zusätzlicher Spalten auf.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Teilt die angegebene Spalte unter Verwendung der angegebenen Aufteilungsfunktion in eine Gruppe zusätzlicher Spalten auf.

-   `table`: Die Tabelle, die die zu teilende Spalte enthält.
-   `sourceColumn`: Der Name der aufzuteilenden Spalte.
-   `splitter`: Die Teilungsfunktion, die zum Teilen der Spalte verwendet wird (z. B. `Splitter.SplitTextByDelimiter` oder `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Eine Liste der zu erstellenden neuen Spaltennamen oder die Anzahl neuer Spalten.
-   `default`: Überschreibt den Wert, der verwendet wird, wenn nicht genügend geteilte Werte vorhanden sind, um alle neuen Spalten auszufüllen. Der Standardwert für diesen Parameter ist `null`.
-   `extraColumns`: Gibt an, welche Aktion ausgeführt werden soll, wenn möglicherweise mehr Teilungswerte als die Anzahl neuer Spalten vorhanden sind. Sie können einen `ExtraValues.Type` Enumerationswert an diesen Parameter übergeben. Der Standardwert ist `ExtraValues.Ignore`.


## Examples

### Example #1
Teilen Sie die Namensspalte in Vorname und Nachname auf.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Teilen Sie die Namensspalte in Vorname und Nachname auf und benennen Sie die neuen Spalten um.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Teilen Sie die Namensspalte in Vorname und Nachname auf, benennen Sie die neuen Spalten um und füllen Sie alle Leerzeichen mit "-Keine Eingabe-" aus.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Teilen Sie die Namensspalte in Vorname und Nachname auf und benennen Sie die neuen Spalten um. Da möglicherweise mehr Werte als verfügbare Spalten vorhanden sind, sollte die Nachnamenspalte eine Liste sein, die alle Werte nach dem Vornamen enthält.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
