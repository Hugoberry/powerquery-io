---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


สร้าง datetimezone จากรูปแบบ datetimezone ท้องถิ่น สากล และแบบกำหนดเอง


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

สร้างค่า `datetimezone` จากการแสดงข้อความ `text` พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`: ค่า `text` ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้แยกวิเคราะห์วันที่โดยใช้วิธีที่ดีที่สุด
-   `Culture` : เมื่อ `Format` ไม่ใช่ null `Culture`จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"MMM"` จะเป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` จะเป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null` `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = null, Culture = options]`


## Examples

### Example #1
แปลง `"2010-12-31T01:30:00-08:00"` เป็นค่า `datetimezone`
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
แปลงโดยใช้ ISO 8601
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
