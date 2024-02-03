---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Substitúe os valores de erro das columnas especificadas polo valor especificado correspondente.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Substitúe os valores de erro das columnas especificadas de <code>table</code> polos novos valores da lista <code>errorReplacement</code>. O formato da lista é \{\{column1, value1}, …}. É posible que só exista un valor de substitución por columna, e a especificación da columna máis dunha vez provocará un erro.


## Examples

### Example #1 
Subtituír o valor do erro polo texto &#34;mundo&#34; na táboa.
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
Subtituír o valor de erro da columna A polo texto &#34;ola&#34; e na columna B polo texto &#34;mundo&#34; na táboa.
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
