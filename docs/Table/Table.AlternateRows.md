---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Keeps the initial offset then alternates taking and skipping the following rows.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Keeps the initial offset then alternates taking and skipping the following rows.    <ul>       <li><code>table</code>: The input table.</li>       <li><code>offset</code>: The number of rows to keep before starting iterations.</li>       <li><code>skip</code>: The number of rows to remove in each iteration.</li>       <li><code>take</code>: The number of rows to keep in each iteration.</li>    </ul>    


## Examples

### Example #1 
Return a table from the table that, starting at the first row, skips 1 value and then keeps 1 value.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
