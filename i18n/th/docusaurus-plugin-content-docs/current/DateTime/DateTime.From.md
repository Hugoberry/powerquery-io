---
title: DateTime.From
---

# DateTime.From


## Description

สร้างวันที่เวลาจากค่าที่กำหนด


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

ส่งกลับค่า <code>datetime</code> จาก <code>value</code> ที่ระบุ นอกจากนี้อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")ถ้า <code>value</code> ที่ระบุเป็น <code>null</code> <code>DateTime.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่ระบุเป็น <code>datetime</code> <code>value</code> จะถูกส่งกลับ ค่าชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>datetime</code>:      <ul>        <li><code>text</code>: ค่า <code>datetime</code> จากการแทนข้อความ ดู <code>DateTime.FromText</code> สําหรับรายละเอียด</li>        <li><code>date</code>: <code>datetime</code> ที่มี <code>value</code> เป็นคอมโพเนนต์วันที่และ <code>12:00:00 AM</code> เป็นคอมโพเนนต์เวลา</li>        <li><code>datetimezone </code>: <code>datetime</code> ท้องถิ่นที่เทียบเท่ากับ <code>value</code></li>        <li><code>time</code>: <code>datetime</code> ที่มีวันที่เทียบเท่ากับ OLE Automation Date ของ <code>0</code> เป็นคอมโพเนนต์วันที่และ <code>value</code> เป็นคอมโพเนนต์เวลา</li>        <li><code>number</code>: <code>datetime</code> ที่เทียบเท่ากับ OLE Automation Date ที่แสดงโดย <code>value</code></li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่นๆ ข้อผิดพลาดจะถูกส่งกลับ


## Examples

### Example #1 
แปลง &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; เป็นค่า &lt;code&gt;datetime&lt;/code&gt;
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
แปลง &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; เป็นค่า &lt;code&gt;datetime&lt;/code&gt;
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
