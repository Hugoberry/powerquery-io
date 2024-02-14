---
title: Duration.From
---

# Duration.From


สร้างระยะเวลาจากค่าที่กำหนด


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

ส่งกลับค่า <code>duration</code> จาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Duration.From</code> จะส่งกลับ <code>null</code>  ถ้า <code>value</code> ที่กำหนดเป็น <code>duration</code> จะมีการส่งกลับ <code>value</code> ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>duration</code> ได้:      <ul>        <li><code>text</code>: ค่า <code>duration</code> จากรูปแบบเวลาที่ใช้ไปเป็นข้อความ (d.h:m:s) ดู <code>Duration.FromText</code> สำหรับรายละเอียด</li>        <li><code>number</code>: <code>duration</code> เทียบเท่ากับจำนวนเต็มหรือเศษส่วนของวันที่แสดงโดย <code>value</code></li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
แปลง &lt;code&gt;2.525&lt;/code&gt; เป็นค่า &lt;code&gt;duration&lt;/code&gt;
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
