---
title: Number.Combinations
---

# Number.Combinations


ส่งกลับจำนวนการรวมที่ไม่ซ้ำกัน


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

ส่งกลับจำนวนของการรวมที่ไม่ซ้ำกันจากรายการของข้อมูล <code>setSize</code> โดยมีขนาดการรวม <code>combinationSize</code> ที่ระบุ<ul>    <li><code>setSize</code>: จำนวนของข้อมูลในรายการ</li>    <li><code>combinationSize</code>: จำนวนข้อมูลในการรวมแต่ละรายการ</li></ul>


## Examples

### Example #1 
หาจำนวนการรวมจากทั้งหมด 5 รายการเมื่อการรวมแต่ละรายการแบ่งออกเป็นกลุ่มละ 3
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
