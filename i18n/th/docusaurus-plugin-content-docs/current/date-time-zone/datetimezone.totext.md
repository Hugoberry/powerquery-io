---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


ส่งกลับข้อความสำหรับแสดงค่าโซนวันที่เวลา


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับการแสดงข้อความของ `dateTimeZone` พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `culture` มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`:ค่า `text` ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย `Culture`
-   `Culture`: เมื่อ `Format` ไม่ใช่ null `Culture`จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"MMM"` จะเป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` จะเป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null` `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` และ `culture` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = options, Culture = culture]`


## Examples

### Example #1
แปลง `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` เป็นค่า `text` *ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
แปลงโดยใช้รูปแบบ ISO 8601
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
