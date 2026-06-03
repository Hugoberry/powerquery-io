---
title: Date.ToText
---

# Date.ToText


ส่งกลับข้อความสำหรับแสดงแทนของค่าวันที่


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับการแสดงข้อความของ `date` พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `culture` มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`:ค่า `text` ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย `Culture`
-   `Culture`: เมื่อ `Format` ไม่ใช่ null `Culture`จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"MMM"` จะเป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` จะเป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null` `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` และ `culture` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = options, Culture = culture]`


## Examples

### Example #1
แปลง `#date(2010, 12, 31)` เป็นค่า `text` *ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
ค้นหาปีในปฏิทินฮิจเราะห์ที่สอดคล้องกับวันที่ 1 มกราคม 2000 ในปฏิทินคริสต์ศักราช
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
