---
title: Table.AddKey
---

# Table.AddKey


## Description

Dodaje klucz do tabeli.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Dodaje klucz do <code>table</code>, gdzie <code>columns</code> jest listą nazw kolumn definiujących klucz, a <code>isPrimary</code> określa, czy klucz jest kluczem podstawowym.


## Examples

### Example #1 
Dodaj jednokolumnowy klucz podstawowy do tabeli.
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
