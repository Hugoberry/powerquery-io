---
title: Table.PrefixColumns
---

# Table.PrefixColumns


すべての列にプレフィックスとして指定のテキストが付いているテーブルを返します。


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

指定された <code>table</code> からのすべての列名にプレフィックスとして指定のテキスト (<code>prefix</code>) とピリオドが <code>prefix</code><code>.ColumnName</code> という形式で付いているテーブルを返します。


## Examples

### Example #1 
テーブルの列に &#34;MyTable&#34; というプレフィックスを付けます。
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
