---
title: DataLake.Files
---

# DataLake.Files


ใส่ URL บัญชี Azure Data Lake Storage ของคุณ


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่มีแถวสำหรับแต่ละไฟล์ที่พบใน <code>url</code> จาก Azure Data Lake Storage รุ่น1 แต่ละแถวประกอบด้วยคุณสมบัติของไฟล์และลิงก์ไปยังเนื้อหานั้นๆ


