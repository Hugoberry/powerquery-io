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

การใช้ `identityProvider` ที่ระบุจะแปลง `condition` เป็นรายการข้อมูลประจำตัวโดย `condition` จะส่งกลับ `true` ในบริบทการอนุญาตทั้งหมดที่มี `identityProvider` เป็นผู้ให้บริการข้อมูลประจำตัว ข้อผิดพลาดจะแสดงขึ้นถ้าไม่สามารถแปลง `condition` เป็นรายการข้อมูลประจำตัวได้ ตัวอย่างเช่น ถ้า `condition` ตรวจสอบแอตทริบิวต์อื่นๆ ที่ไม่ใช่ข้อมูลประจำตัวของผู้ใช้หรือกลุ่มเพื่อทำการตัดสินใจ

โปรดทราบว่ารายการข้อมูลประจำตัวแสดงข้อมูลประจำตัวตามที่ปรากฏใน `condition` และไม่มีการดำเนินการนอร์มัลไลซ์ (เช่น การขยายกลุ่ม)



## Category
Accessing data
