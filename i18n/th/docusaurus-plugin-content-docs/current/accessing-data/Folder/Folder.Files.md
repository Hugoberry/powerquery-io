---
title: Folder.Files
---

# Folder.Files


ส่งกลับตารางที่มีคุณสมบัติและเนื้อหาของแฟ้มที่พบในโฟลเดอร์ที่ระบุและโฟลเดอร์ย่อย


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่มีแถวสําหรับแต่ละไฟล์ที่พบในโฟลเดอร์ <code>path</code> และโฟลเดอร์ย่อยทั้งหมด แต่ละแถวประกอบด้วยคุณสมบัติของไฟล์และลิงก์ไปยังเนื้อหา พารามิเตอร์ <code>options</code> มีไว้สําหรับใช้ภายในเท่านั้นในขณะนี้



## Category
Accessing data
