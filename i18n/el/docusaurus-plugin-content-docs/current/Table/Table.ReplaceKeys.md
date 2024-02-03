---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


## Description

Αντικαθιστά τα κλειδιά του καθορισμένου πίνακα.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Details

Αντικαθιστά τα κλειδιά του καθορισμένου πίνακα.


## Examples

### Example #1 
Αντικαταστήστε τα υπάρχοντα κλειδιά ενός πίνακα.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    resultTable = Table.ReplaceKeys(tableWithKeys, {[Columns = {"Id"}, Primary = false]})
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
