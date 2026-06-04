---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Zamenja eno vrednost z drugo v navedenih stolpcih.


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

Zamenja vrednost z novo vrednostjo v določenih stolpcih tabele.

-   `table`: Tabela za iskanje.
-   `oldValue`: Vrednost za zamenjavo.
-   `newValue`: Nadomestna vrednost.
-   `replacer`: Funkcija za zamenjavo, ki jo je treba uporabiti. Funkcija je lahko `Replacer.ReplaceText` za zamenjavo izvirnega besedila z novim besedilom, `Replacer.ReplaceValue` za zamenjavo izvirne vrednosti z novo vrednostjo ali pa funkcija za zamenjavo po meri.
-   `columnsToSearch`: Seznam določenega stolpca ali določenih stolpcev v tabeli za iskanje vrednosti za zamenjavo.


## Examples

### Example #1
Zamenjajte besedilo"na svidenje"z besedilom"svet"v stolpcu B, ki se ujema le s celotno vrednostjo.
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
Zamenjajte besedilo"ur"z besedilom"or"v stolpcu B, ki se ujema s poljubnim delom vrednosti.
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
Anonimizirajte imena zaposlenih v ZDA.
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
Anonimizirajte vse stolpce zaposlenih v ZDA.
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
