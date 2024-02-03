---
title: Table.FillDown
---

# Table.FillDown


## Description

Μεταδίδει την τιμή του προηγούμενου κελιού στα κελιά με τιμές που δεν είναι null παρακάτω στη στήλη.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Επιστρέφει έναν πίνακα από την καθορισμένη <code>table</code> όπου η τιμή του προηγούμενου κελιού μεταδίδεται παρακάτω στα κελιά με τιμές που είναι null στην καθορισμένη <code>columns</code>.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα με τις τιμές null της στήλης [Place] συμπληρωμένες με την τιμή επάνω από αυτές από τον πίνακα.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
