---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Προβιβάζει την πρώτη γραμμή τιμών σε νέες κεφαλίδες στηλών (δηλαδή ονόματα στηλών).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promotes the first row of values as the new column headers (i.e. column names). By default, only text or number values are promoted to headers. Valid options:

-   `PromoteAllScalars`: If set to `true`, all the scalar values in the first row are promoted to headers using the `Culture`, if specified (or current document locale). For values that cannot be converted to text, a default column name will be used.
-   `Culture`: A culture name specifying the culture for the data.


## Examples

### Example #1
Προβιβάζει την πρώτη γραμμή τιμών του πίνακα.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Προβιβασμός όλων των ανυσματικών τιμών στην πρώτη γραμμή του πίνακα σε κεφαλίδες.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
