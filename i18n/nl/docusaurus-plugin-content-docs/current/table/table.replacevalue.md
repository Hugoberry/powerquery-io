---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Vervangt de ene waarde door een andere waarde in de opgegeven kolommen.


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

Vervangt een waarde door een nieuwe waarde in de opgegeven kolommen van een tabel.

-   `table`: De tabel die moet worden doorzocht.
-   `oldValue`: De waarde die moet worden vervangen.
-   `newValue`: De vervangingswaarde.
-   `replacer`: De vervangingsfunctie die moet worden gebruikt. Dit kan zijn `Replacer.ReplaceText` om de oorspronkelijke tekst te vervangen door nieuwe tekst, `Replacer.ReplaceValue` om de oorspronkelijke waarde te vervangen door een nieuwe waarde, of een aangepaste replacer.
-   `columnsToSearch`: Een lijst met de specifieke kolom of kolommen in de tabel waarin gezocht wordt naar de te vervangen waarde.


## Examples

### Example #1
Vervang de tekst 'tot ziens' door 'wereld' in kolom B, waarbij alleen de hele waarde overeenkomt.
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
Vervang de tekst 'uw' door 'of' in kolom B, waarbij een gedeelte van de waarde overeenkomt.
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
De namen van Amerikaanse werknemers anoniem maken.
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
Alle kolommen van Amerikaanse werknemers anoniem maken.
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
