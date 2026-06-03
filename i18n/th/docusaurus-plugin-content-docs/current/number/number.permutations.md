---
title: Number.Permutations
---

# Number.Permutations


ส่งกลับจำนวนการเรียงสับเปลี่ยน


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

ส่งกลับจำนวนการเรียงสับเปลี่ยนที่สามารถสร้างจากจำนวนของรายการ `setSize` ด้วยขนาดการเรียงสับเปลี่ยนที่ระบุ `permutationSize`


## Examples

### Example #1
หาจำนวนการเรียงสับเปลี่ยนจากทั้งหมด 5 รายการโดยแบ่งออกเป็นกลุ่มละ 3
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
