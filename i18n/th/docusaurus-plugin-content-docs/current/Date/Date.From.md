---
title: Date.From
---

# Date.From


## Description

สร้างวันที่จากค่าที่กำหนด


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

ส่งกลับค่า <code>date</code> จาก <code>value</code> ที่ระบุ นอกจากนี้อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")ถ้า <code>value</code> ที่ระบุเป็น <code>null</code> <code>Date.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่ระบุเป็น <code>date</code> <code>value</code> จะถูกส่งกลับ ค่าชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>date</code>:      <ul>        <li><code>text</code>: ค่า <code>date</code> จากการแทนข้อความ ดู<code>Date.FromText</code> สําหรับรายละเอียด</li>        <li><code>datetime</code>: คอมโพเนนต์วันที่ของ <code>value</code></li>        <li><code>datetimezone</code>: คอมโพเนนต์วันที่ของวันที่เวลาท้องถิ่นที่เทียบเท่ากับ <code>value</code></li>        <li><code>number</code>: คอมโพเนนต์วันที่ของวันที่เวลาที่เทียบเท่ากับ OLE Automation Date ที่แสดงโดย <code>value</code></li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่นๆ ข้อผิดพลาดจะถูกส่งกลับ


## Examples

### Example #1 
แปลง &lt;code&gt;43910&lt;/code&gt; เป็นค่า &lt;code&gt;date&lt;/code&gt;
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
แปลง &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; เป็นค่า &lt;code&gt;date&lt;/code&gt;
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
