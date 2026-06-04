---
title: Table.SelectColumns
---

# Table.SelectColumns


Επιστρέφει έναν πίνακα με μόνο τις καθορισμένες στήλες.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Returns the `table` with only the specified `columns`.

-   `table`: The provided table.
-   `columns`: The list of columns from the table `table` to return. Columns in the returned table are in the order listed in `columns`.
-   `missingField`: *(Optional)* What to do if the column does not exist. Example: `MissingField.UseNull` or `MissingField.Ignore`.


## Examples

### Example #1
Συμπερίληψη μόνο της στήλης \[Name\].
```powerquery
Table.SelectColumns(
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
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Συμπερίληψη μόνο των στηλών \[CustomerID\] και \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Αν η στήλη που περιλαμβάνεται δεν υπάρχει, το προεπιλεγμένο αποτέλεσμα είναι σφάλμα.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Αν η στήλη που περιλαμβάνεται δεν υπάρχει, η επιλογή `MissingField.UseNull` δημιουργεί μια στήλη τιμών null.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
