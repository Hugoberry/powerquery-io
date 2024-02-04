---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indica se a tabela contém apenas linhas distintas (sem duplicados).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indica se <code>table</code> contém apenas linhas distintas (sem duplicados). Devolve <code>true</code> se as linhas forem distintas; caso contrário, devolve <code>false</code>.    Um parâmetro opcional, <code>comparisonCriteria</code>, especifica as colunas da tabela nas quais a duplicação é testada. Se <code>comparisonCriteria</code> não for especificado, todas as colunas são testadas.


## Examples

### Example #1 
Determinar se a tabela é distinta.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a tabela é distinta na coluna.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
