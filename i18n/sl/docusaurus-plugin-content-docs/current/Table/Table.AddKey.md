---
title: Table.AddKey
---

# Table.AddKey


## Description

Doda ključ v dano vrsto tabele.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Doda ključ v <code>table</code>, <code>columns</code> je seznam imen stolpcev, ki določajo ključ, in <code>isPrimary</code> določa, ali je ključ primarni.


## Examples

### Example #1 
Tabeli dodajte primarni ključ z enim stolpcem.
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
