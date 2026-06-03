---
title: Number.FromText
---

# Number.FromText


สร้างตัวเลขจากรูปแบบข้อความทั่วไป ("15", "3,423.10", "5.0E-10")


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

ส่งกลับค่า `number` จากค่าข้อความที่กำหนดให้ `text`

-   `text`: การแสดงข้อความของค่าตัวเลข การนำเสนอต้องอยู่ในรูปแบบตัวเลขทั่วไป เช่น "15", "3,423.10", "5.0E-10"
-   `culture`: วัฒนธรรมเพิ่มเติมที่จะควบคุมวิธีที่ `text` ใช้ตีความ (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า number ของ `"4"`
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
รับค่าตัวเลข `"5.0e-10"`
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
