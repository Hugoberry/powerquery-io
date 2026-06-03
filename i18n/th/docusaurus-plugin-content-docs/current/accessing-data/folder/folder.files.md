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

ส่งกลับตารางที่มีแถวสําหรับแต่ละไฟล์ที่พบในโฟลเดอร์ที่ระบุและโฟลเดอร์ย่อยทั้งหมด

-   `path`: เส้นทางไปยังโฟลเดอร์ที่คุณต้องการเรียกใช้ไฟล์ เส้นทางโฟลเดอร์ที่ให้มาจะต้องเป็นเส้นทางสัมบูรณ์ที่ถูกต้อง
-   `options`: (ไม่บังคับ) พารามิเตอร์นี้มีไว้สําหรับใช้ภายในเท่านั้นในขณะนี้

แต่ละแถวของตารางที่ส่งกลับประกอบด้วยคุณสมบัติของไฟล์และลิงก์ไปยังเนื้อหา


## Examples

### Example #1
ส่งกลับตารางที่มีไฟล์ทั้งหมดที่พบใน C:\\test-examples\\example-folder และโฟลเดอร์ย่อยทั้งหมด
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
