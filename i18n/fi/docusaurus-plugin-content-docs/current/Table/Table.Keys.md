---
title: Table.Keys
---

# Table.Keys


## Description

Palauttaa määritetyn taulukon avaimet.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Palauttaa määritetyn taulukon avaimet.


## Examples

### Example #1 
Hae taulukon avainluettelo.
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
