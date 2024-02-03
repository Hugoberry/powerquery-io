---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Performs a join between tables on supplied columns and produces the join result in a new column.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

Joins the rows of <code>table1</code> with the rows of <code>table2</code> based on the equality of the values of the key columns selected by <code>key1</code> (for <code>table1</code>) and <code>key2</code> (for <code>table2</code>). The results are entered into the column named <code>newColumnName</code>.This function behaves similarly to Table.Join with a JoinKind of LeftOuter except that the join results are presented in a nested rather than flattened fashion.


## Examples

### Example #1 
Add a join column to (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) named &#34;price/stock&#34; from the table (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) joined on [saleID].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
