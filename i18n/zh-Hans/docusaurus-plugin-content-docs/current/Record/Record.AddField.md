---
title: Record.AddField
---

# Record.AddField


## Description

将字段添加到记录。


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

给定字段 <code>fieldName</code> 的名称和值 <code>value</code>，将字段添加到记录 <code>record</code>。


## Examples

### Example #1 
将字段地址添加到记录。
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
