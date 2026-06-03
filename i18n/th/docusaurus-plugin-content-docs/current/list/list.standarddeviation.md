---
title: List.StandardDeviation
---

# List.StandardDeviation


ส่งกลับการประมาณค่าเบี่ยงมาตรฐานโดยอิงตามตัวอย่าง


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

ส่งคืนตัวอย่างที่อิงตามการประมาณค่าเบี่ยงเบนมาตรฐานของค่าในรายการ `numbersList` ถ้า `numbersList` เป็นรายการจำนวน จะมีการส่งคืนจำนวน จะเกิดข้อผิดพลาดหากรายการว่างเปล่าหรือรายการที่ไม่ใช่ประเภท `ตัวเลข`


## Examples

### Example #1
ค้นหาค่าเบี่ยงเบนมาตรฐานของจำนวน 1 ถึง 5
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
