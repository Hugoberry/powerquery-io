---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Nahradí v zadaných sloupcích jednu hodnotu druhou.


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

Nahradí hodnotu novou hodnotou v zadaných sloupcích tabulky.

-   `table`: Tabulka, ve které se má hledat
-   `oldValue`: Hodnota, která se má nahradit
-   `newValue`: Nahrazují hodnota
-   `replacer`: Funkce pro nahrazování, která se má použít. Funkce může být buď `Replacer.ReplaceText` pro nahrazení původního textu novým textem, `Replacer.ReplaceValue` pro nahrazení původní hodnoty novou hodnotou, nebo vlastní funkce pro nahrazování.
-   `columnsToSearch`: Seznam obsahující konkrétní sloupce v tabulce, ve kterých se má hledat hodnota k nahrazení


## Examples

### Example #1
Nahraďte text „goodbye“ textem „world“ ve sloupci B, který odpovídá pouze celé hodnotě.
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
Nahraďte text „your“ textem „or“ ve sloupci B, který odpovídá jakékoli části hodnoty.
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
Anonymizujte jména zaměstnanců v USA.
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
Anonymizujte všechny sloupce zaměstnanců v USA.
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
