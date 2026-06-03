---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica se algum registro especificado será exibido como linha na tabela.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se algum registro especificado da lista de registros `rows` será exibido como linha na `table`. Um parâmetro `equationCriteria` opcional pode ser especificado para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1
Determine se a tabela `({[a = 1, b = 2], [a = 3, b = 4]})` contém as linhas `[a = 1, b = 2]` ou `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Determine se a tabela `({[a = 1, b = 2], [a = 3, b = 4]})` contém as linhas `[a = 1, b = 3]` ou `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Determine se a tabela `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contém as linhas `[a = 1, b = 3]` ou `[a = 3, b = 5]` comparando apenas a coluna \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
