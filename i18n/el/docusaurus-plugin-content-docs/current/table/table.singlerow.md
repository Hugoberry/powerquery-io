---
title: Table.SingleRow
---

# Table.SingleRow


Επιστρέφει τη μοναδική γραμμή του πίνακα.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Επιστρέφει τη μοναδική γραμμή στη μία γραμμή `table`. Αν η `table` έχει περισσότερες από μία γραμμές, προκύπτει σφάλμα.


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
