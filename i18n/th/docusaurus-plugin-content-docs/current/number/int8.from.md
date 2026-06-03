---
title: Int8.From
---

# Int8.From


สร้างจำนวนเต็ม 8 บิตที่มีเครื่องหมายจากค่าที่กำหนดไว้


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

ส่งกลับค่า `number` จํานวนเต็ม 8 บิตที่มีเครื่องหมายจาก `value` ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Int8.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `number` ภายในช่วงของจํานวนเต็ม 8 บิตที่มีเครื่องหมายโดยไม่มีเศษส่วน ระบบจะส่งกลับ `value` ถ้ามีเศษส่วน ระบบจะปัดเศษตัวเลขดังกล่าวตามโหมดการปัดเศษที่ระบุไว้ โหมดการปัดเศษเริ่มต้นคือ `RoundingMode.ToEven` ถ้า `value` เป็นชนิดอื่น ระบบจะแปลงเป็น `number` ก่อน โดยใช้ `Number.FromText` โปรดดู `Number.Round` สําหรับโหมดการปัดเศษที่ใช้งานได้ อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า `ตัวเลข` ที่เป็นจำนวนเต็ม 8 บิตที่มีเครื่องหมายสำหรับ `"4"`
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
รับค่า `ตัวเลข` ที่เป็นจำนวนเต็ม 8 บิตที่มีเครื่องหมายสำหรับ `"4.5"` โดยใช้ `RoundingMode.AwayFromZero`
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
