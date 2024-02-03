---
title: Table.Split
---

# Table.Split


## Description

Διαιρεί τον καθορισμένο πίνακα σε μια λίστα με πίνακες χρησιμοποιώντας το καθορισμένο μέγεθος σελίδας.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Διαιρεί <code>table</code> σε μια λίστα πινάκων όπου το πρώτο στοιχείο της λίστας είναι ένας πίνακας που περιέχει τις πρώτες <code>pageSize</code> γραμμές από    πίνακα προέλευσης, το επόμενο στοιχείο της λίστας είναι ένας πίνακας που περιέχει τις επόμενες γραμμές <code>pageSize</code> από τον πίνακα προέλευσης,  και ούτω καθεξής.


## Examples

### Example #1 
Διαιρέστε έναν πίνακα πέντε εγγραφών σε πίνακες με δύο εγγραφές στον καθένα.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
