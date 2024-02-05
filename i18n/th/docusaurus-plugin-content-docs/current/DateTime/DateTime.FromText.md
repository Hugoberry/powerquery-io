---
title: DateTime.FromText
---

# DateTime.FromText


## Description

สร้างโซนวันที่เวลาจากรูปแบบวันที่เวลาท้องถิ่นและสากล


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

สร้างค่า <code>datetime</code> จากการแสดงข้อความ <code>text</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>: ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้แยกวิเคราะห์วันที่โดยใช้วิธีที่ดีที่สุด</li>   <li><code>Culture</code> : เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"MMM"</code> จะเป็น <code>"Jan", "Feb", "Mar", ...</code> ในขณะที่ใน <code>"ru-RU"</code> <code>"MMM"</code> จะเป็น <code>"янв", "фев", "мар", ...</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; เป็นค่า datetime
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
แปลง &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; เป็นค่า datetime
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
แปลง &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; เป็นค่า datetime
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
แปลง &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; เป็นค่า datetime
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
