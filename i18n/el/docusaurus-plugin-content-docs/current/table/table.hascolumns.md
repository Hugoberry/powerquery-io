---
title: Table.HasColumns
---

# Table.HasColumns


Υποδεικνύει εάν ο πίνακας περιέχει τις καθορισμένες στήλες.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Υποδεικνύει εάν το `table` περιέχει τις καθορισμένες στήλες, `columns`. Επιστρέφει `true` εάν ο πίνακας περιέχει τις στήλες, `false` διαφορετικά.


## Examples

### Example #1
Προσδιορίζει αν ο πίνακας έχει τη στήλη \[Name\].
```powerquery
Table.HasColumns(
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
true
```


### Example #2
Βρίσκει αν ο πίνακας έχει τη στήλη \[Name\] και \[PhoneNumber\].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
