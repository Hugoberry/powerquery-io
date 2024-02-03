---
title: Stripe.Contents
---

# Stripe.Contents


## Description

เรียกใช้ Stripe API พร้อมตัวเลือกในการจำกัดจำนวนการเรียกใช้ API


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

เรียกใช้ Stripe API ที่ https://api.stripe.com/v1/<code>method</code> พร้อมส่งผ่านระเบียน <code>query</code> ทางเลือกเป็นเช่นพารามิเตอร์เพิ่มเติม และ <code>pageLimit</code> ทางเลือกเป็นเช่นขีดจำกัดสำหรับจำนวนคำขอ API จะมีการส่งคืนค่าข้อมูลล่าสุดก่อน หากไม่มีการระบุ <code>pageLimit</code> จะมีการส่งคืนค่าข้อมูลทั้งหมด มีการใช้ Stripe เวอร์ชัน 2015-10-16


## Examples

### Example #1 
ส่งคืนค่าข้อมูลการเรียกเก็บเงินทั้งหมด
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
ตารางพร้อมข้อมูลการเรียกเก็บเงินทั้งหมดสำหรับบัญชี Stripe ปัจจุบัน
```


### Example #2 
ส่งคืนค่าข้อมูลการเรียกเก็บเงินหนึ่งหน้า
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
ตารางพร้อมข้อมูลการเรียกเก็บเงินล่าสุดสำหรับบัญชี Stripe ปัจจุบัน
```



