---
title: Table.SingleRow
---

# Table.SingleRow


## Description

テーブルの 1 つの行を返します。


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

1 つの行 <code>table</code> の 1 つの行を返します。<code>table</code> に複数の行が存在する場合、例外がスローされます。


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
