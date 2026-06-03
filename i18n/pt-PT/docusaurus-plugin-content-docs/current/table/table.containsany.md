---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica se qualquer um dos registos especificados aparece como uma linha na tabela.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se qualquer um dos registos especificados na lista de registos `rows` aparece como uma linha na `table`. É possível especificar um parâmetro opcional `equationCriteria` para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1
Determinar se a tabela `({[a = 1, b = 2], [a = 3, b = 4]})` contém as linhas `[a = 1, b = 2]` ou `[a = 3, b = 5]`.
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
Determinar se a tabela `({[a = 1, b = 2], [a = 3, b = 4]})` contém as linhas `[a = 1, b = 3]` ou `[a = 3, b = 5]`.
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
Determinar se a tabela `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contém as linhas `[a = 1, b = 3]` ou `[a = 3, b = 5]` comparando apenas a coluna \[a\].
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
