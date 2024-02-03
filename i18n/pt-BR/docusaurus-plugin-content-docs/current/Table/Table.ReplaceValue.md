---
title: Table.ReplaceValue
---

# Table.ReplaceValue


## Description

Substitui um valor por outro nas colunas especificadas.


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

Substitui <code>oldValue</code> por <code>newValue</code> nas colunas especificadas da <code>table</code>.


## Examples

### Example #1 
Substitua o texto &#34;adeus&#34; por &#34;mundo&#34; na coluna B, correspondendo apenas ao valor inteiro.
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
Substitua o texto &#34;seu&#34; por &#34;ou&#34; na coluna B, correspondendo a qualquer parte do valor.
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
Anonimize os nomes dos funcionários dos EUA.
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
Anonimize todas as colunas de funcionários dos EUA.
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
