---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Καταργεί τις καθορισμένες στήλες.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Καταργεί την καθορισμένη `columns` από την παρεχόμενη `table`. Εάν η προκαθορισμένη στήλη δεν υπάρχει, παρουσιάζεται σφάλμα εκτός αν η προαιρετική παράμετρος `missingField` καθορίζει μια εναλλακτική συμπεριφορά (για παράδειγμα, `MissingField.UseNull` ή `MissingField.Ignore`).


## Examples

### Example #1
Καταργεί τη στήλη \[Phone\] από τον πίνακα.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
Προσπαθήστε να καταργήσετε μια στήλη που δεν υπάρχει από τον πίνακα.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
