---
title: Record.ToTable
---

# Record.ToTable


## Description

Επιστρέφει έναν πίνακα όπου κάθε γραμμή του είναι ένα όνομα πεδίου και τιμή από την εγγραφή εισόδου.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιέχει τις στήλες <code>Name</code> και <code>Value</code> με μια γραμμή για κάθε πεδίο στο <code>record</code>.


## Examples

### Example #1 
Δημιουργεί έναν πίνακα από την εγγραφή [A = 1, B = 2, C = 3].
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
