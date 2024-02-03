---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Επιστρέφει έναν πίνακα στον οποίο όλες οι στήλες έχουν πρόθεμα το παρεχόμενο κείμενο.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Επιστρέφει έναν πίνακα όπου όλα τα ονόματα στηλών που παρέχονται από το <code>table</code> έχουν πρόθεμα το παρεχόμενο κείμενο, <code>prefix</code>, συν μια τελεία, στη μορφή <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Προσθέτει το πρόθεμα &#34;MyTable&#34; στις στήλες του πίνακα.
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
