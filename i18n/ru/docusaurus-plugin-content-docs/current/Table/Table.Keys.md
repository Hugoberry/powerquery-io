---
title: Table.Keys
---

# Table.Keys


## Description

Возвращает ключи указанной таблицы.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Возвращает ключи указанной таблицы.


## Examples

### Example #1 
Получение списка ключей для таблицы.
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
