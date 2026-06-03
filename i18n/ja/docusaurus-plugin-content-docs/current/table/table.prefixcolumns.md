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

指定された `table` のすべての列名に指定されたテキスト (`prefix`) とピリオドを組み合わせたプレフィックスを `.ColumnName` の形式で付加したテーブルを返します。


## Examples

### Example #1
テーブルの列に "MyTable" というプレフィックスを付けます。
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
