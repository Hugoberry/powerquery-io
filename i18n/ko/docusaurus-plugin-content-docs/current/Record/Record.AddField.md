---
title: Record.AddField
---

# Record.AddField


## Description

레코드에 필드를 추가합니다.


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

지정된 필드 이름 <code>fieldName</code> 및 값 <code>value</code>으(로) 레코드 <code>record</code>에 필드를 추가합니다.


## Examples

### Example #1 
레코드에 Address 필드를 추가합니다.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
