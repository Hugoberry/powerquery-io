---
title: Number.IsNaN
---

# Number.IsNaN


ระบุว่าค่าเป็น NaN (ไม่ใช่จำนวน) หรือไม่


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

ระบุว่าค่าเป็น NaN (ไม่ใช่จำนวน) หรือไม่ ส่งกลับ <code>true</code> ถ้า <code>number</code> เทียบเท่ากับ <code>Number.IsNaN</code> และ <code>false</code> ถ้าไม่ใช่


## Examples

### Example #1 
ตรวจสอบว่า 0 ที่ถูกหารด้วย 0 เป็น NaN หรือไม่
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
ตรวจสอบว่า 1 ที่ถูกหารด้วย 0 เป็น NaN หรือไม่
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
