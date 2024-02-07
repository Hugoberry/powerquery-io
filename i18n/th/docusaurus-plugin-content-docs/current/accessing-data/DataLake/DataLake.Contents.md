---
title: DataLake.Contents
---

# DataLake.Contents


ใส่ URL บัญชี Azure Data Lake Storage รุ่น1 ของคุณ


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่มีแถวสำหรับแต่ละโฟลเดอร์และไฟล์ที่พบใน <code>url</code> จาก Azure Data Lake Storage รุ่น1 แต่ละแถวประกอบด้วยคุณสมบัติของโฟลเดอร์หรือไฟล์และลิงก์ไปยังเนื้อหานั้นๆ


