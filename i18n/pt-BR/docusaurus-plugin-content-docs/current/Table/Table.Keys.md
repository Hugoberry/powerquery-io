---
title: Table.Keys
---

# Table.Keys


## Description

Retorna as chaves da tabela especificada.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Retorna as chaves da tabela especificada.


## Examples

### Example #1 
Obter a lista de chaves de uma tabela.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
