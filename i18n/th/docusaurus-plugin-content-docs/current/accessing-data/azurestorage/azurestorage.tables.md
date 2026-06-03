---
title: AzureStorage.Tables
---

# AzureStorage.Tables


ส่งกลับตารางการนำทางที่มีตารางที่พบในบัญชีที่ระบุจากชุดเก็บข้อมูลประจำตัวที่จัดเก็บ Azure


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางการนำทางที่มีแถวสำหรับแต่ละตารางที่พบที่ URL บัญชี `account` จากที่เก็บนิรภัยของที่เก็บข้อมูล Azure แต่ละแถวจะมีลิงก์ไปยังตาราง Azure อาจมีการระบุพารามิเตอร์ระเบียนเพิ่มเติม `options` เพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถมีเขตข้อมูลต่อไปนี้:

-   `Timeout` : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งคำขอไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือตามแหล่งที่มา



## Category
Accessing data
