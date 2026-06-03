---
title: Number.IsEven
---

# Number.IsEven


ระบุว่าค่าเป็นเลขคู่หรือไม่


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

ระบุว่าค่า `number` เป็นเลขคู่หรือไม่โดยส่งกลับ `true` ถ้าเป็นเลขคู่ และ `false` ถ้าไม่ใช่


## Examples

### Example #1
ตรวจสอบว่า 625 เป็นจำนวนคู่หรือไม่
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
ตรวจสอบว่า 82 เป็นจำนวนคู่หรือไม่
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
