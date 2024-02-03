---
title: Salesforce.Data
---

# Salesforce.Data


## Description

ส่งผลออบเจ็กต์จากบัญชี Salesforce


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

ส่งคืนออบเจ็กต์ไปยังบัญชี Salesforce ที่กำหนดไว้ในข้อมูลประจำตัว จะมีการเชื่อมต่อบัญชีผ่านสภาพแวดล้อมที่กำหนดไว้ <code>loginUrl</code> หากไม่มีการกำหนดสภาพแวดล้อมไว้ จะมีการเชื่อมต่อบัญชีเข้าระบบการผลิต (https://login.salesforce.com) อาจมีการกำหนดเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติม ในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li><li><code>ApiVersion</code> : รุ่นของ Salesforce API ที่จะใช้สำหรับคิวรีนี้ เมื่อไม่ได้ระบุ จะใช้ API รุ่น 29.0</li><li><code>Timeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งคำขอไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือตามแหล่งที่มา</li></ul>    



## Category
Accessing data
