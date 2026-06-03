---
title: Table.Profile
---

# Table.Profile


Returns a profile of the columns of a table.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Returns a profile for the columns in `table`.

The following information is returned for each column (when applicable):

-   minimum
-   maximum
-   average
-   standard deviation
-   count
-   null count
-   distinct count



## Category
Table.Information
