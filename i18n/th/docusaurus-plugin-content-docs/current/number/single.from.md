---
title: Single.From
---

# Single.From


สร้าง Single จากค่าที่กำหนดไว้


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

ส่งกลับค่า `number` ที่เป็นตัวเลขเดียวจาก `value` ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Single.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `number` ภายในช่วงที่เป็นตัวเลขเดียว ระบบจะส่งกลับ `value` มิฉะนั้นจะส่งกลับข้อผิดพลาด ถ้า `value` เป็นชนิดอื่น ระบบจะแปลงเป็น `number` ก่อน โดยใช้ `Number.FromText` อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า `ตัวเลข` ที่เป็น Single สำหรับ `"1.5"`
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
