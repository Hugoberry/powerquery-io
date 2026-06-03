---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Ersätter ett värde med ett annat i de angivna kolumnerna.


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

Ersätter ett värde med ett nytt värde i de angivna kolumnerna i en tabell.

-   `table`: Tabell att genomsöka.
-   `oldValue`Det värde som ska ersättas.
-   `newValue`: Ersättningsvärde.
-   `replacer`: Den ersättarfunktion som ska användas. Funktionen kan vara antingen `Replacer.ReplaceText` för att ersätta den ursprungliga texten med ny text, `Replacer.ReplaceValue` för att ersätta det ursprungliga värdet med ett nytt värde, eller en anpassad ersättare.
-   `columnsToSearch`: En lista som innehåller den specifika kolumnen eller kolumnerna i tabellen där värdet ska sökas och ersättas.


## Examples

### Example #1
Ersätt texten "hej då" med "värld" i kolumn B, som bara matchar hela värdet.
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
Ersätt texten "din" med "eller" i kolumn B, som matchar någon del av värdet.
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
Anonymisera namnen på amerikanska anställda.
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
Anonymisera alla kolumner med anställda i USA.
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
