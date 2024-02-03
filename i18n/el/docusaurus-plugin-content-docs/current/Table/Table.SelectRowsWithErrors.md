---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Επιστρέφει έναν πίνακα με μόνο εκείνες τις γραμμές του πίνακα εισόδου που περιείχαν ένα σφάλμα σε τουλάχιστον ένα από τα κελιά. Εάν καθορίζεται μια λίστα στηλών, μόνο τα κελιά στις καθορισμένες στήλες ελέγχονται για σφάλματα.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Επιστρέφει έναν πίνακα με μόνο εκείνες τις γραμμές του πίνακα εισόδου που περιείχαν ένα σφάλμα σε τουλάχιστον ένα από τα κελιά. Εάν καθορίζεται μια λίστα στηλών, μόνο τα κελιά στις καθορισμένες στήλες ελέγχονται για σφάλματα.


## Examples

### Example #1 
Επιλέγει ονόματα πελατών με σφάλματα στις αντίστοιχες σειρές.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
