---
title: Table.FirstN
---

# Table.FirstN


## Description

Returns the first count rows specified.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Returns the first row(s) of the table <code>table</code>, depending on the value of <code>countOrCondition</code>:    <ul>    <li> If <code>countOrCondition</code> is a number, that many rows (starting at the top) will be returned. </li>    <li> If <code>countOrCondition</code> is a condition, the rows that meet the condition will be returned until a row does not meet the condition.</li></ul>


## Examples

### Example #1 
Find the first two rows of the table.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Find the first rows where [a] &gt; 0 in the table.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
