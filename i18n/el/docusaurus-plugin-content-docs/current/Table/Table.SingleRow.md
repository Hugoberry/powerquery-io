---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Επιστρέφει τη μοναδική γραμμή του πίνακα.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Επιστρέφει τη μοναδική γραμμή στο <code>table</code> μίας γραμμής. Εάν ο <code>table</code> έχει περισσότερες από μία γραμμές, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Επιστρέφει τη μεμονωμένη γραμμή στον πίνακα.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
