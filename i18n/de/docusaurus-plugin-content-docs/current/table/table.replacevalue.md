---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Ersetzt einen Wert in den angegebenen Spalten durch einen anderen.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

Ersetzt einen Wert durch einen neuen Wert in den angegebenen Spalten einer Tabelle.

-   `table`: Die zu durchsuchende Tabelle.
-   `oldValue`: Der zu ersetzende Wert.
-   `newValue`: Der Ersetzungswert.
-   `replacer`: Die zu verwendende Ersetzungsfunktion. Die Funktion kann entweder `Replacer.ReplaceText` sein, um den ursprünglichen Text durch neuen Text zu ersetzen, `Replacer.ReplaceValue`, um den ursprünglichen Wert durch einen neuen Wert zu ersetzen, oder eine benutzerdefinierte Ersetzungsfunktion.
-   `columnsToSearch`: Eine Liste, die die bestimmte Spalte oder Spalten in der Tabelle enthält, um nach dem zu ersetzenden Wert zu suchen.


## Examples

### Example #1
Ersetzen Sie den Text "goodbye" durch "world" in Spalte B, der nur mit dem gesamten Wert übereinstimmt.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
Ersetzen Sie den Text "ur" durch "or" in Spalte B, der mit einem beliebigen Teil des Werts übereinstimmt.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
Anonymisieren Sie die Namen von Mitarbeitern in den USA.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
Anonymisieren Sie alle Spalten von Mitarbeitern in den USA.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
