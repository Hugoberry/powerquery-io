---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

ส่งกลับการประมาณค่าเบี่ยงมาตรฐานโดยอิงตามตัวอย่าง


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

ส่งคืนตัวอย่างที่อิงตามการประมาณค่าเบี่ยงเบนมาตรฐานของค่าในรายการ <code>numbersList</code>    ถ้า <code>numbersList</code> เป็นรายการจำนวน จะมีการส่งคืนจำนวน    เกิดข้อยกเว้นขึ้นกับรายการที่ว่างเปล่าหรือรายการข้อมูลที่ไม่ใช่ชนิด <code>ตัวเลข</code>


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
