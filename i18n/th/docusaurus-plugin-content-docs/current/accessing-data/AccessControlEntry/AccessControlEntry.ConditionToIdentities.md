---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


ส่งกลับรายการข้อมูลประจำตัวที่เงื่อนไขจะยอมรับ


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

การใช้ <code>identityProvider</code> ที่ระบุจะแปลง <code>condition</code> เป็นรายการข้อมูลประจำตัวโดย <code>condition</code> จะส่งกลับ <code>true</code> ในบริบทการอนุญาตทั้งหมดที่มี <code>identityProvider</code> เป็นผู้ให้บริการข้อมูลประจำตัว ข้อผิดพลาดจะแสดงขึ้นถ้าไม่สามารถแปลง <code>condition</code> เป็นรายการข้อมูลประจำตัวได้ ตัวอย่างเช่น ถ้า <code>condition</code> ตรวจสอบแอตทริบิวต์อื่นๆ ที่ไม่ใช่ข้อมูลประจำตัวของผู้ใช้หรือกลุ่มเพื่อทำการตัดสินใจ<br />    โปรดทราบว่ารายการข้อมูลประจำตัวแสดงข้อมูลประจำตัวตามที่ปรากฏใน <code>condition</code> และไม่มีการดำเนินการนอร์มัลไลซ์ (เช่น การขยายกลุ่ม)<br />



## Category
Accessing data
