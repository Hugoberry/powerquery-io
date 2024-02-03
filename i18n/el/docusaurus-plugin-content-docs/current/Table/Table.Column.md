---
title: Table.Column
---

# Table.Column


## Description

Επιστρέφει μια καθορισμένη στήλη δεδομένων από τον πίνακα ως λίστα.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Επιστρέφει τη στήλη δεδομένων που καθορίζεται από την <code>column</code> από τον πίνακα <code>table</code> ως λίστα.


## Examples

### Example #1 
Επιστρέφει τις τιμές από τη στήλη [Name] στον πίνακα.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
