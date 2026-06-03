---
title: Salesforce.Reports
---

# Salesforce.Reports


ส่งผลรายงานจากบัญชี Salesforce


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

ส่งคืนรายงานไปยังบัญชี Salesforce ที่กำหนดไว้ในข้อมูลประจำตัว จะมีการเชื่อมต่อบัญชีผ่านสภาพแวดล้อมที่กำหนดไว้ `loginUrl` หากไม่มีการกำหนดสภาพแวดล้อมไว้ จะมีการเชื่อมต่อบัญชีเข้าระบบการผลิต (https://login.salesforce.com) อาจมีการกำหนดเรกคอร์ดพารามิเตอร์เสริม `options` เพื่อระบุคุณสมบัติเพิ่มเติม ในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:

-   `ApiVersion` : รุ่นของ Salesforce API ที่จะใช้สำหรับคิวรีนี้ เมื่อไม่ได้ระบุ จะใช้ API รุ่น 29.0
-   `Timeout` : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งคำขอไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือตามแหล่งที่มา



## Category
Accessing data
