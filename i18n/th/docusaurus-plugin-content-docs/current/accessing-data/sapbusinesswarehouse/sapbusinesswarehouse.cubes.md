---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


ส่งกลับ InfoCubes และคิวรีในระบบ SAP Business Warehouse ที่จัดกลุ่มโดย InfoArea


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Remarks

คืนค่าตารางของ InfoCubes และคิวรีที่จัดกลุ่มโดย InfoArea จากอินสแตนซ์คลังข้อมูลธุรกิจ SAP ที่เซิร์ฟเวอร์ `server` โดยมีหมายเลขระบบ `systemNumberOrSystemId` และไคลเอ็นต์ ID `clientId` อาจระบุเรกคอร์ดพารามิเตอร์เสริม `optionsOrLogonGroup` เพื่อควบคุมตัวเลือกต่อไปนี้:



## Category
Accessing data
