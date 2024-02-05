---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

ส่งกลับชุดรายงานใน Adobe Analytics


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

ส่งคืนตารางแพคเกจหลายมิติจาก Adobe Analytics โดยอาจระบุพารามิเตอร์ระเบียนเสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>HierarchicalNavigation</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li><li><code>MaxRetryCount</code> : จำนวนครั้งที่ลองใหม่เพื่อดำเนินการเมื่อทำการสำรวจสำหรับผลลัพธ์ของแบบสอบถาม ค่าเริ่มต้นคือ 120</li><li><code>RetryInterval</code> : ระยะเวลาระหว่างการพยายามลองใหม่แต่ละครั้ง ค่าเริ่มต้นคือ 1 วินาที</li><li><code>Implementation</code> : ระบุเวอร์ชัน API ของ Adobe Analytics ค่าที่ถูกต้องคือ: &quot;2.0&quot; ค่าเริ่มต้นใช้ API เวอร์ชัน 1.4</li></ul>    



## Category
Accessing data
