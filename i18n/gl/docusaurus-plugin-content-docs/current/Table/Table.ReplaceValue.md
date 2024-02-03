---
title: Table.ReplaceValue
---

# Table.ReplaceValue


## Description

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


## Details

Substitúe <code>oldValue</code> con <code>newValue</code> nas columnas especificadas da <code>table</code>.


## Examples

### Example #1 
Substitúe o texto &#34;adeus&#34; por &#34;mundo&#34; na columna B, facendo coincidir só o valor completo.
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
Substitúe o texto &#34;o teu&#34; por &#34;ou&#34; na columna B, facendo coincidir calquera parte do valor.
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
