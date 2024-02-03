---
title: Table.AddKey
---

# Table.AddKey


## Description

Προσθέτει ένα κλειδί σε έναν πίνακα.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Προσθέτει ένα κλειδί στο <code>table</code>, όπου <code>columns</code> είναι η λίστα ονομάτων στηλών που ορίζουν το κλειδί και <code>isPrimary</code> καθορίζει εάν το κλειδί είναι πρωτεύον.


## Examples

### Example #1 
Προσθέστε ένα πρωτεύον κλειδί μίας στήλης σε έναν πίνακα.
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
