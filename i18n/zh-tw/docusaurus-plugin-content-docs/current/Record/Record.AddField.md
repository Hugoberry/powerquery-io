---
title: Record.AddField
---

# Record.AddField


## Description

在記錄中加入欄位。


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Details

指定欄位的名稱 <code>fieldName</code> 和值 <code>value</code>，在記錄 <code>record</code> 中加入欄位。


## Examples

### Example #1 
將 Address 欄位新增至記錄中。
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
