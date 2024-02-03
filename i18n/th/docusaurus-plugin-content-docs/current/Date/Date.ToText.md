---
title: Date.ToText
---

# Date.ToText


## Description

ส่งกลับข้อความสำหรับแสดงแทนของค่าวันที่


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

ส่งกลับการแสดงข้อความของ <code>date</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>culture</code> มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>:ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย <code>Culture</code></li>   <li><code>Culture</code>: เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"MMM"</code> จะเป็น <code>"Jan", "Feb", "Mar", ...</code> ในขณะที่ใน <code>"ru-RU"</code> <code>"MMM"</code> จะเป็น <code>"янв", "фев", "мар", ...</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> และ <code>culture</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; เป็นค่า &lt;code&gt;text&lt;/code&gt; &lt;i&gt;ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน&lt;/i&gt;
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
