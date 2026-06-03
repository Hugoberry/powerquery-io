---
title: Percentage.From
---

# Percentage.From


ส่งกลับค่าเปอร์เซ็นต์จากค่าที่กำหนด


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

ส่งกลับค่า `percentage` จาก `value`ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Percentage.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `text` ที่มีสัญลักษณ์เปอร์เซ็นต์ต่อท้าย ระบบจะส่งกลับตัวเลขทศนิยมที่แปลงแล้ว มิฉะนั้นจะแปลงค่าเป็น `number` โดยใช้ `Number.From` อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า`เปอร์เซ็นต์`ของ `"12.3%"`
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
