---
title: Table.AddKey
---

# Table.AddKey


## Description

Добавляет ключ в таблицу.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Добавляет ключ в <code>table</code>, где <code>columns</code> — список имен столбцов, определяющих ключ, а <code>isPrimary</code> указывает, является ли ключ первичным.


## Examples

### Example #1 
Добавление первичного ключа из одного столбца в таблицу.
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
