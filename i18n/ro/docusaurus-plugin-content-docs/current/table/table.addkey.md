---
title: Table.AddKey
---

# Table.AddKey


Adaugă o cheie la un tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Adaugă o cheie la `table`, unde `columns` este lista de nume de coloane care definesc cheia și `isPrimary`specifică dacă cheia este primară.


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
