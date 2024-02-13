---
title: Record.FieldCount
---

# Record.FieldCount


Trả về số lượng trường trong bản ghi.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Trả về số lượng trường trong bản ghi <code>record</code>.


## Examples

### Example #1 
Tìm số lượng trường trong bản ghi.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
