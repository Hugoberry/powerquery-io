---
title: Record.FromTable
---

# Record.FromTable


\{\[Name = name, Value = value\]\} という形式のテーブルからレコードを作成します。


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

フィールド名と値の名前 `` `table` `` を含むレコード \{\[Name = name, Value = value\]\} のテーブルからレコードを返します。フィールド名が一意でない場合、エラーが発生します。


## Examples

### Example #1
Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) という形式のテーブルからレコードを作成します。
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
