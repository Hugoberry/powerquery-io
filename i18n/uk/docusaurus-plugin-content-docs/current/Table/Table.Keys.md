---
title: Table.Keys
---

# Table.Keys


## Description

Повертає ключі вказаної таблиці.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Повертає ключі вказаної таблиці.


## Examples

### Example #1 
Отримайте список ключів для таблиці.
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
