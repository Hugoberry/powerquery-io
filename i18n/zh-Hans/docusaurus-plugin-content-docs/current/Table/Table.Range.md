---
title: Table.Range
---

# Table.Range


## Description

以指定的偏移量开始返回行。


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

以指定的 <code>offset</code> 开始返回 <code>table</code> 中的行。可选参数 <code>count</code> 指定要返回的行数。默认情况下，将返回偏移量之后的所有行。


## Examples

### Example #1 
返回表中以偏移量 1 开始的所有行。
```powerquery
Table.Range(
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
返回表中以偏移量 1 开始的一行。
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
