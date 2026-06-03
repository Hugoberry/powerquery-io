---
title: DateTime.ToText
---

# DateTime.ToText


ส่งกลับข้อความสำหรับแสดงค่าวันที่เวลา


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับการแสดงข้อความของ `dateTime` พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `culture` มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`:ค่า `text` ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย `Culture`
-   `Culture`: เมื่อ `Format` ไม่ใช่ null `Culture`จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"MMM"` จะเป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` จะเป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null` `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` และ `culture` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = options, Culture = culture]`


## Examples

### Example #1
แปลง `#datetime(2010, 12, 31, 01, 30, 25)` เป็นค่า `text` *ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
แปลงโดยใช้รูปแบบ ISO 8601
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
