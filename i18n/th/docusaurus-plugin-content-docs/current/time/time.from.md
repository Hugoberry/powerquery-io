---
title: Time.From
---

# Time.From


สร้างเวลาจากค่าที่กำหนด


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

ส่งกลับค่า `time` จาก `value` ที่กำหนด อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US") ถ้า `value` ที่กำหนดเป็น `null` `Time.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `time` จะมีการส่งกลับ `value` ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า `time` ได้:

-   `text`: ค่า `time` จากการนำเสนอข้อความ ดู `Time.FromText` สำหรับรายละเอียด
-   `datetime`: คอมโพเนนต์เวลาของ `value`
-   `datetimezone`: คอมโพเนนต์เวลาของวันที่และเวลาท้องถิ่นที่เทียบเท่ากับ `value`
-   `number`: `time` ที่เทียบเท่ากับตัวเลขของวันที่เป็นเศษซึ่งแสดงด้วย `value` ถ้า `value` เป็นค่าลบหรือมากกว่าหรือเท่ากับ 1 ระบบจะส่งกลับข้อผิดพลาด

ถ้า `value` เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1
แปลง `0.7575` เป็นค่า `time`
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
แปลง `#datetime(1899, 12, 30, 06, 45, 12)` เป็นค่า `time`
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
