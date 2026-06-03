---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Substitui os valores de erro nas colunas especificadas pelo valor especificado correspondente.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Substitui os valores de erro nas colunas especificadas do `table` pelos novos valores na lista `errorReplacement`. O formato da lista é \{\{column1, value1\}, ...\}. Só pode existir um valor de substituição por coluna; especificar a coluna mais do que uma vez resultará num erro.


## Examples

### Example #1
Substituir o valor de erro pelo texto "mundo" na tabela.
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
Substituir o valor de erro na coluna A pelo texto "olá" e, na coluna B, pelo texto "mundo" na tabela.
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
