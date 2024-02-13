---
title: Function.Invoke
---

# Function.Invoke


เรียกใช้ฟังก์ชันที่ระบุ


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

เรียกใช้ฟังก์ชันที่ระบุโดยใช้รายการที่ระบุของอาร์กิวเมนต์และส่งกลับผลลัพธ์


## Examples

### Example #1 
เรียกใช้ Record.FieldNames ด้วยหนึ่งอาร์กิวเมนต์ [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
