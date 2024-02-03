---
title: Table.AddKey
---

# Table.AddKey


## Description

Додає ключ до таблиці.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Додає ключ до <code>table</code>, де <code>columns</code> – список імен стовпців, які визначають ключ, а <code>isPrimary</code> указує, чи ключ є первинним.


## Examples

### Example #1 
Додайте стовпець первинного ключа до таблиці.
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
