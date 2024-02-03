---
title: Date.FromText
---

# Date.FromText


## Description

สร้าง Date จากรูปแบบ Date ท้องถิ่น สากล และแบบกำหนดเอง


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

สร้างค่า <code>date</code> จากการแสดงข้อความ <code>text</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>: ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 เพื่อดูรายละเอียดเพิ่มเติม การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้แยกวิเคราะห์วันที่โดยใช้วิธีที่ดีที่สุด</li>   <li><code>Culture</code> : เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"MMM"</code> จะเป็น <code>"Jan", "Feb", "Mar", ...</code> ในขณะที่ใน <code>"ru-RU"</code> <code>"MMM"</code> จะเป็น <code>"янв", "фев", "мар", ...</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; เป็นค่า &lt;code&gt;date&lt;/code&gt;
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
ค้นหาวันที่ในปฏิทินคริสต์ศักราชที่สอดคล้องกับกับการเริ่มต้นของปี 1400 ในปฏิทินฮิจเราะห์
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
