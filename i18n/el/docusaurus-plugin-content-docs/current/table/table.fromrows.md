---
title: Table.FromRows
---

# Table.FromRows


Creates a table from a list of row values and optional columns.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Δημιουργεί έναν πίνακα από τη λίστα `rows` όπου κάθε στοιχείο της λίστας είναι μια εσωτερική λίστα που περιέχει τις τιμές στηλών για μία σειρά. Μια προαιρετική λίστα ονομάτων στηλών, ένας τύπος πίνακα ή ένας αριθμός στηλών μπορούν να δοθούν για το `columns`.


## Examples

### Example #1
Επιστρέφει έναν πίνακα με τη στήλη \[CustomerID\] και τιμές \{1, 2\}, με τη στήλη \[Name\] και τιμές \{"Bob", "Jim"\} και τη στήλη \[Phone\] με τιμές \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Επιστρέφει έναν πίνακα με τη στήλη \[CustomerID\] και τιμές \{1, 2\}, έναν πίνακα \[Name\] με τιμές \{"Bob", "Jim"\} και τη στήλη \[Phone\] με τιμές \{"123-4567", "987-6543"\}, όπου το \[CustomerID\] είναι τύπος αριθμού και τα \[Name\] και \[Phone\] είναι τύποι κειμένου.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
