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

คืนค่าตารางของ InfoCubes และคิวรีที่จัดกลุ่มโดย InfoArea จากอินสแตนซ์คลังข้อมูลธุรกิจ SAP ที่เซิร์ฟเวอร์ <code>server</code> โดยมีหมายเลขระบบ <code>systemNumberOrSystemId</code> และไคลเอ็นต์ ID <code>clientId</code> อาจระบุเรกคอร์ดพารามิเตอร์เสริม <code>optionsOrLogonGroup</code> เพื่อควบคุมตัวเลือกต่อไปนี้:        



## Category
Accessing data
