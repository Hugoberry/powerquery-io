---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

สร้างโซนวันที่เวลาจากค่าที่กำหนด


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

ส่งกลับค่า <code>datetimezone</code> จาก <code>value</code> ที่ระบุ นอกจากนี้อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")ถ้า <code>value</code> ที่ระบุเป็น <code>null</code> <code>DateTimeZone.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่ระบุเป็น <code>datetimezone</code> <code>value</code> จะถูกส่งกลับ ค่าชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>datetimezone</code>:      <ul>        <li><code>text</code>: ค่า <code>datetimezone</code> จากการแทนข้อความ ดู <code>DateTimeZone.FromText</code> สำหรับรายละเอียด</li>        <li><code>date</code>: <code>datetimezone</code> ที่มี <code>value</code> เป็นคอมโพเนนต์วันที่ <code>12:00:00 AM</code> เป็นคอมโพเนนต์เวลาและออฟเซตที่สอดคล้องกับโซนเวลาท้องถิ่น</li>        <li><code>datetime</code>: <code>datetimezone</code> ที่มี <code>value</code> เป็นวันที่เวลาและออฟเซตที่สอดคล้องกับโซนเวลาท้องถิ่น</li>        <li><code>time</code>: <code>datetimezone</code> ที่มีวันที่เทียบเท่ากับ OLE Automation Date ของ <code>0</code> เป็นคอมโพเนนต์วันที่ <code>value</code>เป็นคอมโพเนนต์เวลาและออฟเซตที่สอดคล้องกับโซนเวลาท้องถิ่น</li>        <li><code>number</code>: <code>datetimezone</code> ที่มีวันที่เวลาเทียบเท่ากับ OLE Automation Date ที่แสดงโดย <code>value</code> และออฟเซตที่สอดคล้องกับโซนเวลาท้องถิ่น</li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่นๆ ข้อผิดพลาดจะถูกส่งกลับ


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; เป็นค่า &lt;code&gt;datetimezone&lt;/code&gt;
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
