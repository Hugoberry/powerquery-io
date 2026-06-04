---
title: Record.AddField
---

# Record.AddField


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


## Remarks

지정된 필드 이름 `fieldName` 및 값 `value`으(로) 레코드 `record`에 필드를 추가합니다.


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
