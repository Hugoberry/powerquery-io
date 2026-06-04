---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Επιστρέφει έναν πίνακα στον οποίο όλες οι στήλες έχουν πρόθεμα το παρεχόμενο κείμενο.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Returns a table where all the column names from the `table` provided are prefixed with the given text, `prefix`, plus a period in the form `prefix.ColumnName`.


## Examples

### Example #1
Προσθέτει το πρόθεμα "MyTable" στις στήλες του πίνακα.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
