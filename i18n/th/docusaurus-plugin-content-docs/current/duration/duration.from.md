---
title: Duration.From
---

# Duration.From


สร้างระยะเวลาจากค่าที่กำหนด


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

ส่งคืนค่าระยะเวลาจากค่าที่กำหนด

-   `value`: ค่าที่ใช้ในการคำนวณระยะเวลา หากค่า `value` ที่กำหนดเป็น `null` ฟังก์ชันนี้จะส่งคืน `null` ถ้า `value` ที่กำหนดเป็น `duration` `value` จะส่งคืนค่า ค่าประเภทต่อไปนี้สามารถแปลงเป็นค่า `duration` ได้:
    -   `text`: ค่า `duration` จากรูปแบบเวลาที่ใช้ไปเป็นข้อความ (d.h:m:s) ดูที่ `Duration.FromText` สำหรับรายละเอียด
    -   `number`: `duration` เทียบเท่ากับจำนวนเต็มหรือเศษส่วนของวันที่แสดงโดย `value`

ถ้า `value` เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1
แปลง `2.525` เป็นค่า `duration`
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
แปลงค่าข้อความ `"2.05:55:20.34567"` เป็นค่า `duration`
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
