---
title: Table.RemoveRows
---

# Table.RemoveRows


## Description

Καταργεί τον καθορισμένο αριθμό γραμμών.


## Syntax

```powerquery
Table.RemoveRows(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

Καταργεί τις <code>count</code> γραμμές που ξεκινούν από <code>table</code>, ξεκινώντας από το <code>offset</code> που καθορίστηκε. Σε περίπτωση που δεν παρέχεται η παράμετρος <code>count</code>, χρησιμοποιείται το προεπιλεγμένο πλήθος 1. 


## Examples

### Example #1 
Καταργεί την πρώτη γραμμή του πίνακα.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    0
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


### Example #2 
Καταργεί τη γραμμή στη θέση 1 του πίνακα.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Καταργεί δύο γραμμές ξεκινώντας από τη θέση 1 του πίνακα.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
