---
title: Table.FillUp
---

# Table.FillUp


## Description

Μεταδίδει την τιμή ενός κελιού στα κελιά με τιμές που είναι null παραπάνω στη στήλη.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Επιστρέφει έναν πίνακα από την καθορισμένη <code>table</code> όπου η τιμή του επόμενου κελιού μεταδίδεται παραπάνω στα κελιά με τιμές που είναι null στην καθορισμένη <code>columns</code>.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα με τις τιμές null της στήλης [Column2] συμπληρωμένες με την τιμή κάτω από αυτές από τον πίνακα.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
