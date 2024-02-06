---
title: Record.FieldValues
---

# Record.FieldValues


傳回欄位值的清單。


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

傳回記錄 <code>record</code> 中欄位值的清單。


## Examples

### Example #1 
找出記錄中的欄位值。
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
