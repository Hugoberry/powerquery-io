---
title: Record.FieldCount
---

# Record.FieldCount


ส่งกลับจำนวนของเขตข้อมูลในระเบียน


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

ส่งกลับจำนวนของเขตข้อมูลในระเบียน <code>record</code>


## Examples

### Example #1 
ค้นหาจำนวนฟิลด์ในระเบียน
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
