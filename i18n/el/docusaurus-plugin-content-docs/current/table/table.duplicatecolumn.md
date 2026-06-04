---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Αναπαράγει μια στήλη με το καθορισμένο όνομα. Οι τιμές και ο τύπος αντιγράφονται από τη στήλη προέλευσης.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplicate the column named `columnName` to the table `table`. The values and type for the column `newColumnName` are copied from column `columnName`.


## Examples

### Example #1
Αναπαράξτε τη στήλη "a" σε μια στήλη με το όνομα "copied column" στον πίνακα `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
