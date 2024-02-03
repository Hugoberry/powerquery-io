---
title: Table.FromRecords
---

# Table.FromRecords


## Description

Μετατρέπει μια εγγραφών σε πίνακα.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Μετατρέπει την <code>records</code>, μια λίστα εγγραφών, σε πίνακα.


## Examples

### Example #1 
Δημιουργήστε έναν πίνακα από εγγραφές, χρησιμοποιώντας ονόματα πεδίων εγγραφών ως ονόματα στηλών.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Δημιουργήστε έναν πίνακα από εγγραφές με πληκτρολογημένες στήλες και επιλέξτε τις στήλες αριθμών.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
