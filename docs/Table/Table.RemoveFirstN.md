---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


Returns a table with the first count rows skipped.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Returns a table that does not contain the first specified number of rows, <code>countOrCondition</code>, of the table <code>table</code>.    The number of rows removed depends on the optional parameter <code>countOrCondition</code>.    <ul>    <li> If <code>countOrCondition</code> is omitted only the first row is removed. </li>    <li> If <code>countOrCondition</code> is a number, that many rows (starting at the top) will be removed. </li>    <li> If <code>countOrCondition</code> is a condition, the rows that meet the condition will be removed until a row does not meet the condition.</li>    </ul>


## Examples

### Example #1 
Remove the first row of the table.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Remove the first two rows of the table.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Remove the first rows where [CustomerID] &lt;=2 of the table.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
