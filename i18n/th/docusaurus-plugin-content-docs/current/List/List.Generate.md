---
title: List.Generate
---

# List.Generate


## Description

สร้างรายการค่า


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

สร้างรายการค่าโดยใช้ฟังก์ชันที่มีให้ ฟังก์ชัน <code>initial</code> ฟังก์ชันสร้างค่าตัวเลือกเริ่มต้น ซึ่งทดสอบกับ <code>condition</code> แล้ว    หากค่าตัวเลือกได้รับการอนุมัติ ค่าจะถูกส่งคืนโดยเป็นส่วนหนึ่งของรายการผลลัพธ์ และค่าตัวเลือกถัดไปจะถูกสร้างขึ้นโดยการส่งผ่านค่าที่ได้รับอนุมัติใหม่ไปที่ <code>next</code>    เมื่อค่าตัวเลือกไม่ตรงกับ <code>condition</code> กระบวนการสร้างรายการจะหยุดลง    อาจมีการระบุพารามิเตอร์เพิ่มเติม <code>selector</code> เพื่อแปลงรายการในรายการผลลัพธ์


## Examples

### Example #1 
สร้างรายการโดยเริ่มต้นที่สิบ โดยค่อยๆ ลดทีละหนึ่ง และตรวจดูให้แน่ใจว่าแต่ละรายการมีค่ามากกว่าศูนย์
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
สร้างรายการระเบียนที่มี x และ y ซึ่ง x เป็นค่าและ y เป็นรายการ x ควรยังคงน้อยกว่า 10 และแสดงจำนวนข้อมูลในรายการ y หลังจากสร้างรายการแล้ว ให้ส่งกลับเฉพาะค่า x
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
