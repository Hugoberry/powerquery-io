---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Nahradí jednu hodnotu v zadaných stĺpcoch inou hodnotou.


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

Nahradí hodnotu novou hodnotou v zadaných stĺpcoch tabuľky.

-   `table`: Tabuľka na vyhľadanie.
-   `oldValue`Hodnota, ktorá sa má nahradiť.
-   `newValue`: Nahradzujúca hodnota.
-   `replacer`: Funkcia nahrádzača, ktorá sa má použiť. Funkcia môže byť buď `Replacer.ReplaceText` na nahradenie pôvodného textu novým textom, `Replacer.ReplaceValue` na nahradenie pôvodnej hodnoty novou hodnotou, alebo vlastný nahrádzač.
-   `columnsToSearch`: Zoznam obsahujúci konkrétny stĺpec alebo stĺpce v tabuľke na vyhľadanie hodnoty, ktorá sa má nahradiť.


## Examples

### Example #1
Nahraďte text „zbohom“ textom „svet“ v stĺpci B, ktorý zodpovedá iba celej hodnote.
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
Nahraďte text „váš“ textom „alebo“ v stĺpci B, ktorý zodpovedá ľubovoľnej časti hodnoty.
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
Anonymizujte mená zamestnancov v USA.
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
Anonymizujte všetky stĺpce zamestnancov v USA.
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
