---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

คืนค่าตารางพร้อมข้อมูลจากจุดสิ้นสุด MailChimp


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

ทำการเรียกใช้ไปยัง MailChimp API และคืนค่าชุดข้อมูลผลลัพธ์ที่ได้เป็นตาราง เพจผ่านผลลัพธ์ทั้งหมดโดยอัตโนมัติ หรือสามารถใช้พารามิเตอร์ entityName สำหรับจุดสิ้นสุด API ซึ่งจุดสิ้นสุดรูทและ entityName หลักในคำตอบ JSON ไม่ตรงกัน


## Examples

### Example #1 
ดึงตารางข้อมูลจากจุดสิ้นสุดรายการของ MailChimp API
```powerquery
MailChimp.Collection("รายการ")
```

Result: 
```powerquery
ตารางพร้อมข้อมูลรายการ
```


### Example #2 
ดึงตารางข้อมูลจากจุดสิ้นสุดโฟลเดอร์แคมเปญของ MailChimp API
```powerquery
MailChimp.Collection("campaign-folders", "โฟลเดอร์")
```

Result: 
```powerquery
ตารางพร้อมข้อมูลโฟลเดอร์แคมเปญ
```



