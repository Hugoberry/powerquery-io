---
title: Table.LastN
---

# Table.LastN


Returns the last specified number of rows.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Returns the last row(s) from the table, <code>table</code>, depending on the value of <code>countOrCondition</code>:    <ul>    <li> If <code>countOrCondition</code> is a number, that many rows will be returned starting from position (end - <code>countOrCondition</code>). </li>    <li> If <code>countOrCondition</code> is a condition, the rows that meet the condition will be returned in ascending position until a row does not meet the condition.</li></ul>


## Examples

### Example #1 
Find the last two rows of the table.
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Find the last rows where [a] &gt; 0 in the table.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
