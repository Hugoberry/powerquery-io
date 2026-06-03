---
title: Int16.From
---

# Int16.From


สร้างจำนวนเต็ม 16 บิตจากค่าที่กำหนดไว้


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

ส่งกลับค่า `number` จํานวนเต็ม 16 บิตจาก `value` ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Int16.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `number` ภายในช่วงของจํานวนเต็ม 16 บิตโดยไม่มีเศษส่วน ระบบจะส่งกลับ `value` ถ้ามีเศษส่วน ระบบจะปัดเศษตัวเลขดังกล่าวตามโหมดการปัดเศษที่ระบุไว้ โหมดการปัดเศษเริ่มต้นคือ `RoundingMode.ToEven` ถ้า `value` เป็นชนิดอื่น ระบบจะแปลงเป็น `number` ก่อน โดยใช้ `Number.FromText` โปรดดู `Number.Round` สําหรับโหมดการปัดเศษที่ใช้งานได้ อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า `ตัวเลข` ที่เป็นจำนวนเต็ม 16 บิตสำหรับ `"4"`
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
รับค่า `ตัวเลข` ที่เป็นจำนวนเต็ม 16 บิตสำหรับ `"4.5"` โดยใช้ `RoundingMode.AwayFromZero`
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
