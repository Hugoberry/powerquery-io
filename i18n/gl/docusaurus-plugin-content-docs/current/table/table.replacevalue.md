---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Substitúe un valor con outro nas columnas especificadas.


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

Substitúe un valor por un novo valor nas columnas especificadas dunha táboa.

-   `table`: Táboa que se vai buscar.
-   `oldValue`: O valor que se vai substituír.
-   `newValue`: O valor de substitución.
-   `replacer`: A función de substitución que se vai utilizar. A función pode ser `Replacer.ReplaceText` para substituír o texto orixinal por un novo texto, `Replacer.ReplaceValue` para substituír o valor orixinal por un novo valor, ou un substituto personalizado.
-   `columnsToSearch`: Unha lista que contén a columna ou columnas específicas da táboa onde buscar o valor que hai que substituír.


## Examples

### Example #1
Substitúe o texto "adeus" por "mundo" na columna B, facendo coincidir só o valor completo.
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
Substitúe o texto "o teu" por "ou" na columna B, facendo coincidir calquera parte do valor.
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
Anonimizar os nomes dos empregados dos EUA.
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
Anonimizar todas as columnas dos empregados dos EUA.
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
