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

Partitions the <code>table</code> into a list of <code>groups</code> number of tables, based on the value of the <code>column</code> and a <code>hash</code> function.    The <code>hash</code> function is applied to the value of the <code>column</code> row to obtain a hash value for the row. The hash value modulo <code>groups</code> determines in which of the returned tables the row will be placed.    <ul>       <li><code>table</code>: The table to partition.</li>       <li><code>column</code>: The column to hash to determine which returned table the row is in.</li>       <li><code>groups</code>: The number of tables the input table will be partitioned into.</li>       <li><code>hash</code>: The function applied to obtain a hash value.</li>    </ul>  


## Examples

### Example #1 
Partition the table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; into 2 tables on column [a], using the value of the columns as the hash function.
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
