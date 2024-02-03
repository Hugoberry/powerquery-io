---
title: Record.FromTable
---

# Record.FromTable


## Description

\{[Name = name, Value = value]} という形式のテーブルからレコードを作成します。


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

フィールド名と値の名前 <code>\{[Name = name, Value = value]}</code> を含むレコード <code>table</code> のテーブルからレコードを返します。フィールド名が一意でなかった場合は、例外がスローされます。


## Examples

### Example #1 
Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) という形式のテーブルからレコードを作成します。
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
