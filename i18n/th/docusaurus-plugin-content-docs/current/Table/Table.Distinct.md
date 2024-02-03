---
title: Table.Distinct
---

# Table.Distinct


## Description

เอาแถวที่ซ้ำออกจากตาราง


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

เอาแถวที่ซ้ำกันออกจากตาราง    พารามิเตอร์ที่เลือกได้  <code>equationCriteria</code> ระบุว่าคอลัมน์ใดของตารางที่ได้รับการทดสอบสําหรับการทําซ้ำ ถ้า <code>equationCriteria</code> ไม่ได้ระบุอลัมน์ทั้งหมดจะได้รับการทดสอบ<br />    <br />    เนื่องจากในบางครั้ง Power Query จะถ่ายข้อมูลการดําเนินการบางอย่างไปยังแหล่งข้อมูล Backend (เรียกว่า "การพับ") และในบางครั้งจะปรับคิวรีให้เหมาะสมโดย     การข้ามการดําเนินการที่ไม่จําเป็นอย่างเคร่งครัด โดยทั่วไปแล้ว จะไม่มีการรับประกันว่ารายการที่ซ้ำกันใดจะถูกเก็บรักษาไว้    ตัวอย่างเช่น คุณไม่สามารถสรุปได้ว่าแถวแรกที่มีค่าคอลัมน์ชุดที่ไม่ซ้ำกันจะยังคงอยู่ และแถวที่อยู่ไกลออกไปในตารางจะถูกเอาออก    ถ้าคุณต้องการให้การเอารายการที่ซ้ำกันออกสามารถทํางานได้ ก่อนอื่นให้บัฟเฟอร์ตารางโดยใช้ <code>Table.Buffer</code>.


## Examples

### Example #1 
นำแถวที่ซ้ำซ้อนออกจากตาราง
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
เอาแถวที่ซ้ำออกจากคอลัมน์ [b] ในตาราง &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
