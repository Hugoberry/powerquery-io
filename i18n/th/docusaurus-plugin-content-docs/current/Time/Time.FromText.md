---
title: Time.FromText
---

# Time.FromText


## Description

สร้าง Time จากรูปแบบ Time ท้องถิ่นและสากล และแบบกำหนดเอง


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

สร้างค่า <code>time</code> จากการแสดงข้อความ <code>text</code> พารามิเตอร์ <code>record</code> เพิ่มเติม <code>options</code> อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม <code>record</code> สามารถมีเขตข้อมูลต่อไปนี้:<ul>   <li><code>Format</code>: ค่า <code>text</code> ที่ระบุรูปแบบที่ใช้ ไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 การละเขตข้อมูลนี้หรือระบุเป็น <code>null</code> จะส่งผลให้แยกวิเคราะห์เวลาโดยใช้วิธีที่ดีที่สุด</li>   <li><code>Culture</code>: เมื่อ <code>Format</code> ไม่ใช่ null <code>Culture</code>จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน <code>"en-US"</code> <code>"tt"</code> จะเป็น <code>"AM" หรือ "PM"</code> ในขณะที่ใน <code>"ar-EG"</code> <code>"tt"</code> จะเป็น <code>"ص" หรือ "م"</code> เมื่อ <code>Format</code> เป็น <code>null</code> <code>Culture</code> จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ <code>Culture</code> เป็น <code>null</code> หรือละไว้ จะใช้ <code>Culture.Current</code></li></ul>เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม <code>options</code> อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; เป็นค่าเวลา
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
แปลง &lt;code&gt;&#34;1012&#34;&lt;/code&gt; เป็นค่า Time
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
แปลง &lt;code&gt;&#34;10&#34;&lt;/code&gt; เป็นค่า Time
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
