---
title: Table.AddKey
---

# Table.AddKey


Προσθέτει ένα κλειδί σε έναν πίνακα.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Προσθέτει ένα κλειδί στο `table`, όπου `columns` είναι η λίστα ονομάτων στηλών που ορίζουν το κλειδί και `isPrimary` καθορίζει εάν το κλειδί είναι πρωτεύον.


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
