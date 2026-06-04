---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Substitueix un valor per un altre a les columnes especificades.


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

Substitueix un valor per un valor nou a les columnes especificades d'una taula.

-   `table`: taula en la qual es cercarà.
-   `oldValue`: valor que se substituirà.
-   `newValue`: el valor de substitució.
-   `replacer`: funció de substitució que s'utilitzarà. La funció pot ser `Replacer.ReplaceText` per substituir el text original amb text nou, `Replacer.ReplaceValue` per substituir el valor original per un valor nou o un substituïdor personalitzat.
-   `columnsToSearch`: llista que conté la columna o columnes específiques de la taula on cercar el valor que se substituirà.


## Examples

### Example #1
Substitueix el text "adéu" per "món" a la columna B, només si coincideix amb el valor sencer.
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
Substitueix el text "ur" per "or" a la columna B, si coincideix amb qualsevol part del valor.
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
Anonimitzeu els noms dels empleats dels EUA.
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
Anonimitza totes les columnes dels empleats dels EUA.
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
