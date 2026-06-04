---
title: Table.Unpivot
---

# Table.Unpivot


Μεταφράζει ένα σύνολο στηλών σε πίνακα με ζεύγη χαρακτηριστικού-τιμής.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Μεταφράζει ένα σύνολο στηλών σε πίνακα με ζεύγη χαρακτηριστικού-τιμής, συνδυασμένα με τις υπόλοιπες τιμές κάθε γραμμής.


## Examples

### Example #1
Λάβετε τις στήλες "a", "b" και "c" του πίνακα `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` και αναλύστε τις σε ζεύγη χαρακτηριστικού-τιμής.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
