---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Indica se a tabela contém as colunas especificadas.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Indica se a <code>table</code> contém as colunas especificadas, <code>columns</code>. Retorna <code>true</code> se a tabela contiver as colunas; do contrário, <code>false</code> será retornado.


## Examples

### Example #1 
Determinar se a tabela tem a coluna [Name].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Localizar se a tabela tem as colunas [Name] e [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
