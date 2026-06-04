---
title: Table.AddKey
---

# Table.AddKey


Додає ключ до таблиці.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Додає ключ до `table`, де `columns` – список імен стовпців, які визначають ключ, а `isPrimary` указує, чи ключ є первинним.


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
