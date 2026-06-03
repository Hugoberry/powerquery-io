---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


ส่งกลับชุดรายงานใน Adobe Analytics


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

ส่งคืนตารางแพคเกจหลายมิติจาก Adobe Analytics โดยอาจระบุพารามิเตอร์ระเบียนเสริม `options` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `HierarchicalNavigation` : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือเท็จ)
-   `MaxRetryCount` : จำนวนครั้งที่ลองใหม่เพื่อดำเนินการเมื่อทำการสำรวจสำหรับผลลัพธ์ของแบบสอบถาม ค่าเริ่มต้นคือ 120
-   `RetryInterval` : ระยะเวลาระหว่างการพยายามลองใหม่แต่ละครั้ง ค่าเริ่มต้นคือ 1 วินาที
-   `Implementation` : ระบุเวอร์ชัน API ของ Adobe Analytics ค่าที่ถูกต้องคือ: "2.0" ค่าเริ่มต้นใช้ API เวอร์ชัน 1.4



## Category
Accessing data
