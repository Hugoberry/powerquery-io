---
title: Table.ContainsAll
---

# Table.ContainsAll


指定されたすべてのレコードがテーブルに行として含まれているかどうかを示します。


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

レコードのリスト <code>rows</code> で指定されたすべてのレコードが <code>table</code> に行として含まれているかどうかを示します。    省略可能なパラメーター <code>equationCriteria</code> を指定すると、テーブルの行と行の比較を制御できます。


## Examples

### Example #1 
列 [CustomerID] のみを比較して、テーブルにすべての行が含まれているかどうかを調べます。
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
テーブルにすべての行が含まれているかどうかを調べます。
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
