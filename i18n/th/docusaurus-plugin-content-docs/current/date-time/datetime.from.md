---
title: DateTime.From
---

# DateTime.From


สร้างวันที่เวลาจากค่าที่กำหนด


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

ส่งกลับค่า `datetime` จาก `value` ที่ระบุ นอกจากนี้อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US") ถ้า `value` ที่ระบุเป็น `null` `DateTime.From` จะส่งกลับ `null` ถ้า `value` ที่ระบุเป็น `datetime` `value` จะถูกส่งกลับ ค่าชนิดต่อไปนี้สามารถแปลงเป็นค่า `datetime`:

-   `text`: ค่า `datetime` จากการแทนข้อความ ดู `DateTime.FromText` สําหรับรายละเอียด
-   `date`: `datetime` ที่มี `value` เป็นคอมโพเนนต์วันที่และ `12:00:00 AM` เป็นคอมโพเนนต์เวลา
-   `datetimezone` : `datetime` ท้องถิ่นที่เทียบเท่ากับ `value`
-   `time`: `datetime` ที่มีวันที่เทียบเท่ากับ OLE Automation Date ของ `0` เป็นคอมโพเนนต์วันที่และ `value` เป็นคอมโพเนนต์เวลา
-   `number`: `datetime` ที่เทียบเท่ากับ OLE Automation Date ที่แสดงโดย `value`

ถ้า `value` เป็นชนิดอื่นๆ ข้อผิดพลาดจะถูกส่งกลับ


## Examples

### Example #1
แปลง `#time(06, 45, 12)` เป็นค่า `datetime`
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
แปลง `#date(1975, 4, 4)` เป็นค่า `datetime`
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
