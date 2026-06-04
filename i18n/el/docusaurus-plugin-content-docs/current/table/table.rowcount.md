---
title: Table.RowCount
---

# Table.RowCount


Επιστρέφει τον αριθμό των γραμμών του πίνακα.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Remarks

Επιστρέφει τον αριθμό των γραμμών του `table`.


## Examples

### Example #1
Βρίσκει τον αριθμό των γραμμών του πίνακα.
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
