---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Az egyik értéket lecseréli egy másik értékre a megadott oszlopokban.


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

Egy értéket új értékre cserél a megadott tábla oszlopaiban.

-   `table`: A keresendő tábla.
-   `oldValue`: A lecserélendő érték.
-   `newValue`: A helyettesítő érték.
-   `replacer`: A használandó cserefüggvény. A függvény lehet `Replacer.ReplaceText` az eredeti szöveg új szövegre való lecseréléséhez, `Replacer.ReplaceValue` az eredeti érték új értékre vagy egyéni lecserélőre való lecseréléséhez.
-   `columnsToSearch`: Egy lista, amely a tábla adott oszlopát vagy oszlopait tartalmazza a lecserélendő érték kereséséhez.


## Examples

### Example #1
Cserélje le a „goodbye” szöveget a „world"” szövegre a B oszlopban, hogy csak a teljes érték feleljen meg.
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
Cserélje le a „your” szöveget az „or” szövegre a B oszlopban, hogy az érték bármely része megfeleljen.
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
Anonimizálja az egyesült államokbeli alkalmazottainak nevét.
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
Anonimizálja az egyesült államokbeli alkalmazottak összes oszlopát.
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
