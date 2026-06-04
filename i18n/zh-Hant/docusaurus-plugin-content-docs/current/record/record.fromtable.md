---
title: Record.FromTable
---

# Record.FromTable


根據 \{\[Name = name, Value = value\]\} 格式的表格建立記錄。


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

從包含欄位名稱和值名稱 `{[Name = name, Value = value]}` 的記錄表 `table` 傳回記錄。如果欄位名稱不是唯一，則引發錯誤。


## Examples

### Example #1
根據 Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) 格式的表格，建立記錄。
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
