---
title: Table.AddKey
---

# Table.AddKey


## Description

Adaugă o cheie la un tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Adaugă o cheie la <code>table</code>, unde <code>columns</code> este lista de nume de coloane care definesc cheia și <code>isPrimary</code>specifică dacă cheia este primară.


## Examples

### Example #1 
Adăugați o cheie primară cu o singură coloană la un tabel.
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
