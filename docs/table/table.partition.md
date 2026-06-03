---
title: Table.Partition
---

# Table.Partition


Partitions the table into a list of tables based on the number of groups and column specified.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partitions the `table` into a list of `groups` number of tables, based on the value of the `column` and a `hash` function. The `hash` function is applied to the value of the `column` row to obtain a hash value for the row. The hash value modulo `groups` determines in which of the returned tables the row will be placed.

-   `table`: The table to partition.
-   `column`: The column to hash to determine which returned table the row is in.
-   `groups`: The number of tables the input table will be partitioned into.
-   `hash`: The function applied to obtain a hash value.


## Examples

### Example #1
Partition the table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` into 2 tables on column \[a\], using the value of the columns as the hash function.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
