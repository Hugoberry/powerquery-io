---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Επιστρέφει έναν πίνακα με τις γραμμές σε αντίστροφή σειρά.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Επιστρέφει έναν πίνακα με τις γραμμές από την είσοδο <code>table</code> σε αντίστροφη σειρά.


## Examples

### Example #1 
Αντιστρέφει τις γραμμές του πίνακα.
```powerquery
Table.ReverseRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
