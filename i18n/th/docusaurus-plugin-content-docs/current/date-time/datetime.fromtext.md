---
title: DateTime.FromText
---

# DateTime.FromText


สร้างโซนวันที่เวลาจากรูปแบบวันที่เวลาท้องถิ่นและสากล


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

สร้างค่า `datetime` จากการแสดงข้อความ `text` พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`: ค่า `text` ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้แยกวิเคราะห์วันที่โดยใช้วิธีที่ดีที่สุด
-   `Culture` : เมื่อ `Format` ไม่ใช่ null `Culture`จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"MMM"` จะเป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` จะเป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null` `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = null, Culture = options]`


## Examples

### Example #1
แปลง `"2010-12-31T01:30:00"` เป็นค่า datetime
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
แปลง `"2010-12-31T01:30:00.121212"` เป็นค่า datetime
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
แปลง `"2010-12-31T01:30:00"` เป็นค่า datetime
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
แปลง `"20101231T013000"` เป็นค่า datetime
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
