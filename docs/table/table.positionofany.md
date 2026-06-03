---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Returns the position or positions of any of the specified rows within the table.


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
Find the position of the first occurrence of \[a = 2, b = 4\] or \[a = 6, b = 8\] in the table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Find the position of all the occurrences of \[a = 2, b = 4\] or \[a = 6, b = 8\] in the table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
