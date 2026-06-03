---
title: Duration.ToText
---

# Duration.ToText


ส่งกลับข้อความของรูปแบบ "d.h:m:s"


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

ส่งกลับการแสดงข้อความในรูปแบบ "day.hour:mins:sec" ของค่าระยะเวลาที่ระบุ `duration`.

-   `duration`: `ระยะเวลา` ที่ใช้ในการคำนวณการแสดงผลในรูปแบบข้อความ
-   `format`: *(ไม่บังคับ)* ไม่สนับสนุน จะแสดงข้อผิดพลาดถ้าไม่ใช่ null


## Examples

### Example #1
แปลง `#duration(2, 5, 55, 20)` เป็นค่าข้อความ
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
