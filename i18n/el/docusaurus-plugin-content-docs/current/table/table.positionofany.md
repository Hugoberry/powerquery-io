---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Επιστρέφει τη θέση ή τις θέσεις της οποιασδήποτε από τις καθορισμένες γραμμές μέσα στον πίνακα.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Returns the row(s) position(s) from the `table` of the first occurrence of the list of `rows`. Returns -1 if no occurrence is found.

-   `table`: The input table.
-   `rows`: The list of rows in the table to find the positions of.
-   `occurrence`: *(Optional)* Specifies which occurrences of the row to return.
-   `equationCriteria`: *(Optional)* Controls the comparison between the table rows.


## Examples

### Example #1
Βρείτε τη θέση της πρώτης εμφάνισης της \[a = 2, b = 4\] ή της \[a = 6, b = 8\] στον πίνακα `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Βρείτε τη θέση όλων των εμφανίσεων της \[a = 2, b = 4\] ή της \[a = 6, b = 8\] στον πίνακα `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
