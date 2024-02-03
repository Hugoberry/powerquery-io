---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Εισαγάγει μια λίστα γραμμών στον πίνακα στην καθορισμένη θέση.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

Επιστρέφει έναν πίνακα με τη λίστα των σειρών, <code>rows</code>, που έχει εισαχθεί στο <code>table</code> στη δεδομένη θέση, <code>offset</code>. Κάθε στήλη στη γραμμή προς εισαγωγή πρέπει να ταιριάζει με τους τύπους στηλών του πίνακα.


## Examples

### Example #1 
Εισάγει τη γραμμή στον πίνακα, στη θέση 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Εισάγει δύο γραμμές στον πίνακα στη θέση 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
