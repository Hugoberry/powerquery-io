---
title: Time.ToText
---

# Time.ToText


ส่งกลับข้อความสำหรับแสดงแทนของค่าเวลา


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับการแสดงข้อความของ `time` พารามิเตอร์ `record`เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `culture` มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น The `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`: ค่า `text` ที่ระบุรูปแบบที่จะใช้ สำหรับรายละเอียดเพิ่มเติม โปรดไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย `Culture`
-   `Culture`: เมื่อ `Format` ไม่ใช่ null `Culture` จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"tt"` เป็น `"AM" or "PM"` จะเป็น `"ar-EG"` `"tt"` เป็น `"ص" or "م"` ในขณะที่ใน `Format` เป็น `null`, `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` และ `culture` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = options, Culture = culture]`


## Examples

### Example #1
แปลง `#time(01, 30, 25)` เป็นค่า `text` *ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
แปลงโดยใช้รูปแบบเวลามาตรฐาน
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
