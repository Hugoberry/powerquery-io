---
title: Table.Keys
---

# Table.Keys


## Description

Returnează cheile tabelului specificat.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Returnează cheile tabelului specificat.


## Examples

### Example #1 
Obțineți lista de chei pentru un tabel.
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
