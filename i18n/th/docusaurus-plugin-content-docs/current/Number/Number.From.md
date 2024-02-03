---
title: Number.From
---

# Number.From


## Description

สร้างจำนวนจากค่าที่กำหนด


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

ส่งกลับค่า <code>number</code> จาก <code>value</code> ที่กำหนดให้ อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US") ถ้า <code>value</code> ที่กำหนดให้เป็น <code>null</code> <code>Number.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่กำหนดให้เป็น <code>number</code> จะมีการส่งกลับ <code>value</code> ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>number</code> ได้:      <ul>        <li><code>text</code>: ค่า <code>number</code> จากการนำเสนอข้อความ ระบบจะจัดการรูปแบบข้อความทั่วไป ("15", "3,423.10", "5.0E-10") ดู <code>Number.From.Text</code> สำหรับรายละเอียด</li>        <li><code>logical</code>: 1 สำหรับ <code>true</code>, 0 สำหรับ <code>false</code></li>        <li><code>datetime</code>: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่</li>        <li><code>datetimezone</code>: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่และเวลาท้องถิ่นของ <code>value</code></li>        <li><code>date</code>: ตัวเลขจุดลอยตัวความแม่นยำสองเท่าที่มี OLE Automation Date เทียบเท่ากับวันที่</li>        <li><code>time</code>:  แสดงวันในรูปแบบเศษส่วน</li>        <li><code>duration</code>: แสดงวันในรูปแบบเต็มและเศษส่วน</li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
รับค่า &lt;code&gt;number&lt;/code&gt; ของ &lt;code&gt;&#34;4&#34;&lt;/code&gt;
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
รับค่า &lt;code&gt;number&lt;/code&gt; ของ &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
รับค่า&lt;code&gt;จำนวน&lt;/code&gt;ของ &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
