---
title: Table.FindText
---

# Table.FindText


Επιστρέφει όλες τις γραμμές του πίνακα που περιέχουν το κείμενο που δίνεται.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Επιστρέφει όλες τις γραμμές του πίνακα `table` που περιέχουν το κείμενο `text`. Εάν το κείμενο δεν βρεθεί, επιστρέφεται ένας κενός πίνακας.


## Examples

### Example #1
Βρίσκει τις γραμμές του πίνακα που περιέχουν το "Bob".
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
