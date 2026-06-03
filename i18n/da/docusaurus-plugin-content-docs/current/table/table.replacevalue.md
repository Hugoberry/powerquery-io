---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Erstatter én værdi med en anden i de angivne kolonner.


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

Erstatter en værdi med en ny værdi i de angivne kolonner i en tabel.

-   `table`: Den tabel, der skal søges i.
-   `oldValue`: Den værdi, der skal erstattes.
-   `newValue`: Erstatningsværdien.
-   `replacer`: Den erstatningsfunktion, der skal bruges. Funktionen kan være enten `Replacer.ReplaceText` for at erstatte den oprindelige tekst med ny tekst, `Replacer.ReplaceValue` for at erstatte den oprindelige værdi med en ny værdi, eller en brugerdefineret erstatningsfunktion.
-   `columnsToSearch`: En liste, der indeholder den eller de specifikke kolonner i tabellen hvor der skal søges efter den værdi, der skal erstattes.


## Examples

### Example #1
Erstat teksten "farvel" med "verden" i kolonne B, der kun matcher hele værdien.
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
Erstat teksten "din" med "eller" i kolonne B, så den svarer til en hvilken som helst del af værdien.
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
Anonymiser navnene på de amerikanske medarbejdere.
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
Anonymiser alle kolonner med de amerikanske medarbejdere.
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
