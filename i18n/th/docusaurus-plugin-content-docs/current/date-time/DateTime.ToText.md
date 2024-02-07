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

ส่งกลับการแสดงข้อความของ <code>dateTime</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>culture</code> มีไว้สำหรับเวิร์กโฟลว์แบบดั้งเดิมเท่านั้น <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>:ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้จัดรูปแบบวันที่ตามค่าเริ่มต้นที่กำหนดไว้โดย <code>Culture</code></li>   <li><code>Culture</code>: เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"MMM"</code> จะเป็น <code>"Jan", "Feb", "Mar", ...</code> ในขณะที่ใน <code>"ru-RU"</code> <code>"MMM"</code> จะเป็น <code>"янв", "фев", "мар", ...</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> และ <code>culture</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; เป็นค่า &lt;code&gt;text&lt;/code&gt; &lt;i&gt;ผลลัพธ์อาจแตกต่างกันไปตามวัฒนธรรมปัจจุบัน&lt;/i&gt;
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
