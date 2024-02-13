---
title: Table.AddKey
---

# Table.AddKey


Adiciona uma chave ao tipo de tabela especificado.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Adicione uma chave a <code>table</code>, em que <code>columns</code> é a lista de nomes de coluna que define a chave e <code>isPrimary</code> especifica se a chave é primária.


## Examples

### Example #1 
Adiciona uma chave primária de coluna única a uma tabela.
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
