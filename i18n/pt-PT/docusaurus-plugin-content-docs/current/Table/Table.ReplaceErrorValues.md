---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Substitui os valores de erro nas colunas especificadas pelo valor especificado correspondente.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Substitui os valores de erro nas colunas especificadas de <code>table</code> pelos novos valores na lista <code>errorReplacement</code>. O formato da lista é \{\{column1, value1}, …}. Pode haver apenas um valor de substituição por coluna; especificar a coluna mais do que uma vez poderá originar um erro.


## Examples

### Example #1 
Substituir o valor de erro pelo texto &#34;mundo&#34; na tabela.
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
Substituir o valor de erro na coluna A pelo texto &#34;olá&#34; e, na coluna B, pelo texto &#34;mundo&#34; na tabela.
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
