---
title: Table.RemoveLastN
---

# Table.RemoveLastN


返回一个表，其中删除了最后 N 行。


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

返回一个表，该表不包含表 `table` 的最后 `countOrCondition` 行。 删除的行数依赖于可选参数 `countOrCondition`。

-   如果忽略 `countOrCondition`，则只删除最后一行。
-   如果 `countOrCondition` 为数字，则将删除该数字那么多的行(从底部开始)。
-   如果 `countOrCondition` 是条件，将删除满足此条件的行，直到行不满足条件为止。


## Examples

### Example #1
删除表的最后一行。
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
删除表中 \[CustomerID\] > 2 的最后几行。
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
