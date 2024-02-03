---
title: Table.Keys
---

# Table.Keys


## Description

Επιστρέφει τα κλειδιά του καθορισμένου πίνακα.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Επιστρέφει τα κλειδιά του καθορισμένου πίνακα.


## Examples

### Example #1 
Λήψη της λίστας κλειδιών για έναν πίνακα.
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
