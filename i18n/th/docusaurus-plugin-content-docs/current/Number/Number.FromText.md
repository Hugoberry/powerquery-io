---
title: Number.FromText
---

# Number.FromText


## Description

สร้างตัวเลขจากรูปแบบข้อความทั่วไป (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;)


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

ส่งกลับค่า <code>number</code> จากค่าข้อความที่กำหนดให้ <code>text</code> <ul>  <li><code>text</code>: การแสดงข้อความของค่าตัวเลข การนำเสนอต้องอยู่ในรูปแบบตัวเลขทั่วไป เช่น "15", "3,423.10", "5.0E-10"</li>  <li><code>culture</code>: วัฒนธรรมเพิ่มเติมที่จะควบคุมวิธีที่ <code>text</code> ใช้ตีความ (ตัวอย่างเช่น "en-US")</li> </ul>


## Examples

### Example #1 
รับค่า number ของ &lt;code&gt;&#34;4&#34;&lt;/code&gt;
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
รับค่าตัวเลข &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
