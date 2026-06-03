---
title: Record.Field
---

# Record.Field


傳回記錄中指定欄位的值。


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

傳回 `record` 中指定 `field` 的值。如果找不到欄位，則引發錯誤。


## Examples

### Example #1
找出記錄中 "CustomerID" 欄位的值。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
