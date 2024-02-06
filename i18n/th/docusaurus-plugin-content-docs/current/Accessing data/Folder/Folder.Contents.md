---
title: Folder.Contents
---

# Folder.Contents


ส่งกลับตารางที่มีคุณสมบัติและเนื้อหาของไฟล์และโฟลเดอร์ที่พบในโฟลเดอร์ที่ระบุ


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่มีแถวสําหรับแต่ละโฟลเดอร์และไฟล์ที่พบในโฟลเดอร์ <code>path</code> แต่ละแถวประกอบด้วยคุณสมบัติของโฟลเดอร์หรือไฟล์และลิงก์ไปยังเนื้อหา พารามิเตอร์ <code>options</code> มีไว้สําหรับใช้ภายในเท่านั้นในขณะนี้



## Category
Accessing data
