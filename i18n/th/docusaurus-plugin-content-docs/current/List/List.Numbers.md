---
title: List.Numbers
---

# List.Numbers


ส่งกลับรายการตัวเลขที่ได้รับค่าเริ่มต้น จำนวนนับ และค่าการเพิ่มที่เลือกได้


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

ส่งกลับรายการตัวเลขที่ได้รับค่าเริ่มต้น จำนวนนับ และค่าการเพิ่มที่เลือกได้ ค่าการเพิ่มเริ่มต้นคือ 1<ul>   <li><code>start</code>: ค่าเริ่มต้นในรายการ</li>   <li><code>count</code>: จำนวนค่าที่จะสร้าง</li>   <li><code>increment</code>: <i>[ระบุหรือไม่ก็ได้]</i> ค่าที่จะเพิ่ม ถ้าค่าที่ละเว้นถูกเพิ่มทีละ 1</li></ul>


## Examples

### Example #1 
สร้างรายการของ 10 ตัวเลขเรียงกันโดยเริ่มต้นที่ 1
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
สร้างรายการตัวเลข 10 ตัวซึ่งเริ่มต้นที่ 1 โดยเพิ่มขึ้นทีละ 2 สำหรับตัวเลขถัดไปแต่ละตัว
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
