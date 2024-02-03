---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Δημιουργεί έναν πίνακα από μια λίστα στηλών και καθορισμένων τιμών.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Δημιουργεί έναν πίνακα τύπου <code>columns</code> από μια λίστα <code>lists</code> που περιέχει ένθετες λίστες με τα ονόματα και τις τιμές των στηλών.    Εάν ορισμένες στήλες έχουν περισσότερες τιμές από άλλες, οι τιμές που λείπουν θα συμπληρωθούν με την προεπιλεγμένη τιμή "null", εάν οι στήλες επιδέχονται την τιμή null.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα από μια λίστα ονομάτων πελατών σε μια λίστα. Κάθε τιμή στο στοιχείο λίστας πελατών μετατρέπεται σε μια τιμή γραμμής και κάθε λίστα μετατρέπεται σε στήλη.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Δημιουργήστε έναν πίνακα από μια δεδομένη λίστα στηλών και από μια λίστα ονομάτων στηλών.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Δημιουργεί έναν πίνακα με διαφορετικό αριθμό στηλών ανά γραμμή. Η τιμή γραμμής που λείπει είναι null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
