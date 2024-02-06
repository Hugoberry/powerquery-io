---
title: Table.SingleRow
---

# Table.SingleRow


傳回資料表的單一資料列。


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

傳回單列 <code>table</code> 的單一資料列。如果 <code>table</code> 有多個資料列，則會擲回例外狀況。


## Examples

### Example #1 
傳回資料表中的單一資料列。
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
