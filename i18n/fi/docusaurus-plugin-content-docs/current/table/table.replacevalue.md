---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Korvaa yhden arvon toisella määritetyissä sarakkeissa.


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

Korvaa arvon uudella arvolla taulukon määritetyissä sarakkeissa.

-   `table`: Haettava taulukko.
-   `oldValue`: Korvattava arvo.
-   `newValue`: Korvaava arvo.
-   `replacer`: Käytettävä korvausfunktio. Funktio voi olla joko `Replacer.ReplaceText`, joka korvaa alkuperäisen tekstin uudella tekstillä, `Replacer.ReplaceValue`, joka korvaa alkuperäisen arvon uudella arvolla, tai mukautettu korvausfunktio.
-   `columnsToSearch`: Luettelo taulukon sarakkeista, joissa korvattavaa arvoa etsitään.


## Examples

### Example #1
Korvaa teksti "näkemiin" sarakkeen B tekstillä "maailma", vastaten vain koko arvon.
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
Korvaa teksti "oma" sarakkeen B tekstillä "soma", vastaten mitä tahansa arvon osaa.
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
Anonymisoi yhdysvaltalaisten työntekijöiden nimet.
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
Anonymisoi kaikki yhdysvaltalaiset työntekijät.
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
