---
title: Table.ReplaceValue
---

# Table.ReplaceValue


## Description

Zamenjuje jednu vrednost iz navedenih kolona drugom.


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


## Details

Zamenjuje <code>oldValue</code> sa <code>newValue</code> u navedenim kolonama u <code>table</code>.


## Examples

### Example #1 
Zamenite tekst „Zbogom“ sa „Svet“ u koloni B, što se podudara samo sa celom vrednošću.
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
Zamenite tekst „vaš“ sa „ili“ u koloni B, što se podudara sa bilo kojim delom vrednosti.
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
Anonimizujte imena zaposlenih u SAD.
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
Anonimizujte sve kolone zaposlenih u SAD.
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
