---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Substitúe os valores de erro das columnas especificadas polo valor especificado correspondente.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Substitúe os valores de erro nas columnas especificadas da `table` polos novos valores da lista `errorReplacement` . O formato da lista é \{\{column1, value1\} , ...\}. Só pode haber un valor de substitución por columna; especificar a columna máis dunha vez producirá un erro.


## Examples

### Example #1
Subtituír o valor do erro polo texto "mundo" na táboa.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Subtituír o valor de erro da columna A polo texto "ola" e na columna B polo texto "mundo" na táboa.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
