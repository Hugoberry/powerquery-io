---
title: Table.SingleRow
---

# Table.SingleRow


テーブルの 1 つの行を返します。


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

1 つの行 `table` 内の 1 つの行を返します。`table` に複数の行がある場合は、エラーが発生します。


## Examples

### Example #1
テーブルの単一行を返します。
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
