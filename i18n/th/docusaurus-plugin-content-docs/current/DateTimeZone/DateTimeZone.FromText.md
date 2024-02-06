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

สร้างค่า <code>datetimezone</code> จากการแสดงข้อความ <code>text</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>: ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้แยกวิเคราะห์วันที่โดยใช้วิธีที่ดีที่สุด</li>   <li><code>Culture</code> : เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"MMM"</code> จะเป็น <code>"Jan", "Feb", "Mar", ...</code> ในขณะที่ใน <code>"ru-RU"</code> <code>"MMM"</code> จะเป็น <code>"янв", "фев", "мар", ...</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; เป็นค่า &lt;code&gt;datetimezone&lt;/code&gt;
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
