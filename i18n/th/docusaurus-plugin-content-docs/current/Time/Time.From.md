---
title: Time.From
---

# Time.From


สร้างเวลาจากค่าที่กำหนด


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

ส่งกลับค่า <code>time</code> จาก <code>value</code> ที่กำหนด อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Time.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่กำหนดเป็น <code>time</code> จะมีการส่งกลับ <code>value</code> ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>time</code> ได้:      <ul>        <li><code>text</code>: ค่า <code>time</code> จากการนำเสนอข้อความ ดู <code>Time.FromText</code> สำหรับรายละเอียด</li>        <li><code>datetime</code>: คอมโพเนนต์เวลาของ <code>value</code></li>        <li><code>datetimezone</code>: คอมโพเนนต์เวลาของวันที่และเวลาท้องถิ่นที่เทียบเท่ากับ <code>value</code></li>        <li><code>number</code>: <code>time</code> ที่เทียบเท่ากับตัวเลขของวันที่เป็นเศษซึ่งแสดงด้วย <code>value</code> ถ้า <code>value</code> เป็นค่าลบหรือมากกว่าหรือเท่ากับ 1 ระบบจะส่งกลับข้อผิดพลาด</li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
แปลง &lt;code&gt;0.7575&lt;/code&gt; เป็นค่า &lt;code&gt;time&lt;/code&gt;
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
แปลง &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; เป็นค่า &lt;code&gt;time&lt;/code&gt;
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
