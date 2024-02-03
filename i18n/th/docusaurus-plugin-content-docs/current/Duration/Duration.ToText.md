---
title: Duration.ToText
---

# Duration.ToText


## Description

ส่งกลับข้อความของรูปแบบ &#34;d.h:m:s&#34;


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

ส่งกลับการแสดงข้อความในรูปแบบ "day.hour:mins:sec" ของค่าระยะเวลาที่ระบุ <code>duration</code>. <ul>        <li><code>duration</code>: A <code>ระยะเวลา</code> จากค่าที่มีการคำนวณการแสดงข้อความ</li>  <li><code>format</code>: <i>[ระบุหรือไม่ก็ได้]</i>ไม่สนับสนุน จะส่งข้อผิดพลาดหากไม่เป็น null</li>      </ul>


## Examples

### Example #1 
แปลง &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; เป็นค่าข้อความ
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
