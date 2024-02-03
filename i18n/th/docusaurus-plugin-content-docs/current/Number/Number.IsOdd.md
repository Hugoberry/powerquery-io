---
title: Number.IsOdd
---

# Number.IsOdd


## Description

ระบุว่าค่าเป็นเลขคี่หรือไม่


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

ระบุว่าค่าเป็นเลขคี่หรือไม่ ส่งกลับ <code>true</code> ถ้า <code>number</code> เป็นจำนวนคี่ และ <code>false</code> ถ้าไม่ใช่


## Examples

### Example #1 
ตรวจสอบว่า 625 เป็นจำนวนคี่หรือไม่
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
ตรวจสอบว่า 82 เป็นจำนวนคี่หรือไม่
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
