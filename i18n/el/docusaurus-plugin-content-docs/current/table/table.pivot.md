---
title: Table.Pivot
---

# Table.Pivot


Με δεδομένο ένα ζεύγος στηλών που αντιπροσωπεύει ζεύγη χαρακτηριστικού-τιμής, περιστρέφει τα δεδομένα της στήλης χαρακτηριστικών σε επικεφαλίδες στηλών.


## Syntax

```powerquery
Table.Pivot(
    table as table,
    pivotValues as list,
    attributeColumn as text,
    valueColumn as text,
    optional aggregationFunction as function
) as table
```


## Remarks

Με δεδομένο ένα ζεύγος στηλών που αντιπροσωπεύει ζεύγη χαρακτηριστικού-τιμής, περιστρέφει τα δεδομένα της στήλης χαρακτηριστικών σε επικεφαλίδες στηλών.


## Examples

### Example #1
Λάβετε τις τιμές "a", "b" και "c" στη στήλη χαρακτηριστικών του πίνακα `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` και συγκεντρώστε τις στη δική τους στήλη.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 3],
    [key = "y", a = 2, b = 4, c = null]
})
```


### Example #2
Λάβετε τις τιμές "a", "b" και "c" στη στήλη χαρακτηριστικών του πίνακα `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "x", attribute = "c", value = 5 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` και συγκεντρώστε τις στη δική τους στήλη. Το χαρακτηριστικό "c" για το κλειδί "x" έχει πολλές τιμές συσχετισμένες με αυτό, επομένως χρησιμοποιήστε τη συνάρτηση List.Max για να επιλύσετε τη διένεξη.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "x", attribute = "c", value = 5],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value",
    List.Max
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 5],
    [key = "y", a = 2, b = 4, c = null]
})
```




## Category
Table.Column operations
