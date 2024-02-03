---
title: Record.FromTable
---

# Record.FromTable


## Description

根據 \{[Name = name, Value = value]} 格式的表格建立記錄。


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

根據記錄表 <code>table</code> 傳回記錄，表中包含欄位名稱和值名稱 <code>\{[Name = name, Value = value]}</code>。如果欄位名稱不是唯一的，則擲回例外狀況。


## Examples

### Example #1 
根據 Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) 格式的表格，建立記錄。
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
