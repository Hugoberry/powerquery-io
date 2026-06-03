---
title: Number.From
---

# Number.From


สร้างจำนวนจากค่าที่กำหนด


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

ส่งกลับค่า `number` จาก `value` ที่กำหนดให้ อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US") ถ้า `value` ที่กำหนดให้เป็น `null` `Number.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดให้เป็น `number` จะมีการส่งกลับ `value` ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า `number` ได้:

-   `text`: ค่า `number` จากการนำเสนอข้อความ ระบบจะจัดการรูปแบบข้อความทั่วไป ("15", "3,423.10", "5.0E-10") ดู `Number.From.Text` สำหรับรายละเอียด
-   `logical`: 1 สำหรับ `true`, 0 สำหรับ `false`
-   `datetime`: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่
-   `datetimezone`: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่และเวลาท้องถิ่นของ `value`
-   `date`: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่
-   `time`: แสดงวันในรูปแบบเศษส่วน
-   `duration`: แสดงวันในรูปแบบเต็มและเศษส่วน

ถ้า `value` เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1
รับค่า `number` ของ `"4"`
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
รับค่า `number` ของ `#datetime(2020, 3, 20, 6, 0, 0)`
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
รับค่า`จำนวน`ของ `"12.3%"`
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
