---
title: Table.AddKey
---

# Table.AddKey


## Description

Adiciona uma chave a uma tabela.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Adiciona uma chave a <code>table</code>, onde <code>columns</code> é a lista de nomes das colunas que definem a chave e <code>isPrimary</code> especifica se a chave é primária.


## Examples

### Example #1 
Adicione uma chave primária de coluna única a uma tabela.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
