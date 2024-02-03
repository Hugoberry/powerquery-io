---
title: Table.Contains
---

# Table.Contains


## Description

Indica se o registro especificado é exibido como uma linha na tabela.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Indica se o registro especificado, <code>row</code>, é exibido como uma linha na <code>table</code>.    Um parâmetro <code>equationCriteria</code> opcional pode ser especificado para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Determinar se a tabela contém a linha.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a tabela contém a linha.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
Determinar se a tabela contém a linha comparando apenas a coluna [Name].
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
