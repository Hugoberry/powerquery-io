---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

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


## Details

Αναπαράξτε τη στήλη με το όνομα <code>columnName</code> στον πίνακα <code>table</code>. Οι τιμές και ο τύπος για τη στήλη <code>newColumnName</code> αντιγράφονται από τη στήλη <code>columnName</code>.


## Examples

### Example #1 
Αναπαράξτε τη στήλη &#34;a&#34; σε μια στήλη με το όνομα &#34;copied column&#34; στον πίνακα &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
