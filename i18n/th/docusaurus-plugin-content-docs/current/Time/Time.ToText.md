---
title: Time.ToText
---

# Time.ToText


## Description

ส่งกลับข้อความสำหรับแสดงแทนของค่าเวลา


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

ส่งกลับการแสดงข้อความของ <code>time</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>culture</code> มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>:ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย <code>Culture</code></li>   <li><code>Culture</code>: เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"tt"</code> จะเป็น <code>"AM" หรือ "PM"</code> ในขณะที่ใน <code>"ar-EG"</code> <code>"tt"</code> จะเป็น <code>"ص" หรือ "م"</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> และ <code>culture</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; เป็นค่า &lt;code&gt;text&lt;/code&gt; &lt;i&gt;ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน&lt;/i&gt;
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
