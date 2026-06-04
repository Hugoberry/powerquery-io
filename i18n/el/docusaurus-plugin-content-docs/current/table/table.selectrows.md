---
title: Table.SelectRows
---

# Table.SelectRows


Επιλέγει τις γραμμές που ικανοποιούν τη συνάρτηση συνθήκης.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Remarks

Επιστρέφει έναν πίνακα γραμμών από τη λίστα `table`, οι οποίες ικανοποιούν την επιλογή `condition`.


## Examples

### Example #1
Επιλέγει τις σειρές στον πίνακα, στις οποίες οι τιμές στη στήλη \[CustomerID\] είναι μεγαλύτερες του 2.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2
Επιλέγει τις σειρές στον πίνακα, στις οποίες τα ονόματα δεν περιλαμβάνουν το γράμμα "B".
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
