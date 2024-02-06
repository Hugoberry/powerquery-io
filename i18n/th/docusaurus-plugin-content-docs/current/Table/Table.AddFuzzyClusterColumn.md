---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


เพิ่มคอลัมน์ใหม่ที่มีค่าตัวแทนที่ได้รับโดยค่าการจัดกลุ่มแบบ Fuzzy ของคอลัมน์ที่ระบุในตาราง


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

เพิ่มคอลัมน์ใหม่ <code>newColumnName</code> ไปยัง <code>table</code> ด้วยค่าตัวแทนของ <code>columnName</code> โดยตัวแทนจะได้รับโดยการเทียบตรงแบบ Fuzzy ใน <code>columnName</code> สำหรับแต่ละแถว    ชุดตัวเลือกของ <code>options</code> อาจรวมอยู่ด้วยเพื่อระบุวิธีการเปรียบเทียบคอลัมน์คีย์ ตัวเลือกได้แก่:     <ul><li><code>Culture</code> : อนุญาตให้จัดกลุ่มระเบียนตามกฎเฉพาะวัฒนธรรม โดยสามารถเป็นชื่อวัฒนธรรมที่ถูกต้องได้ ตัวอย่างเช่น ตัวเลือกวัฒนธรรม &quot;ja-JP&quot; จะจัดกลุ่มระเบียนตามวัฒนธรรมญี่ปุ่น โดยค่าเริ่มต้นคือ &quot;&quot; ซึ่งจัดกลุ่มตามวัฒนธรรมอังกฤษแบบคงที่</li><li><code>IgnoreCase</code> : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการจัดกลุ่มคีย์แบบไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก ตัวอย่างเช่น เมื่อค่าเป็นจริง &quot;Grapes&quot; จะถูกจัดกลุ่มกับ &quot;grapes&quot; โดยค่าเริ่มต้นคือจริง</li><li><code>IgnoreSpace</code> : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการรวมส่วนของข้อความเพื่อค้นหากลุ่ม ตัวอย่างเช่น เมื่อค่าเป็นจริง &quot;Gra pes&quot; จะถูกจัดกลุ่มกับ &quot;Grapes&quot; โดยค่าเริ่มต้นคือจริง</li><li><code>SimilarityColumnName</code> : ชื่อสำหรับคอลัมน์ที่แสดงความคล้ายคลึงกันระหว่างค่าป้อนเข้าและค่าตัวแทนสำหรับข้อมูลป้อนเข้านั้น ค่าเริ่มต้นคือ null ซึ่งในกรณีนี้จะไม่มีการเพิ่มคอลัมน์ใหม่สำหรับความคล้ายคลึงกัน</li><li><code>Threshold</code> : ตัวเลขระหว่าง 0.00 และ 1.00 ที่ระบุคะแนนความคล้ายคลึงกันที่ค่าสองค่าจะถูกจัดกลุ่ม    ตัวอย่างเช่น &quot;Grapes&quot; และ &quot;Graes&quot; (ไม่มี &quot;p&quot;) จะถูกจัดกลุ่มเข้าด้วยกันก็ต่อเมื่อตั้งค่าตัวเลือกนี้เป็นน้อยกว่า 0.90    ค่าเกณฑ์ 1.00 จะอนุญาตเฉพาะค่าที่ตรงกันทุกประการเท่านั้น    (โปรดทราบว่า &quot;ตรงกันทุกประการ&quot; ที่ไม่ชัดเจนอาจละเว้นความแตกต่าง เช่น ตัวพิมพ์ ลําดับคํา และเครื่องหมายวรรคตอน)    ค่าเริ่มต้นคือ 0.80</li><li><code>TransformationTable</code> : ตารางที่อนุญาตให้จัดกลุ่มระเบียนตามการแมปค่าแบบกำหนดเอง ซึ่งควรมีคอลัมน์ &quot;From&quot; และ &quot;To&quot; ตัวอย่างเช่น &quot;Grapes&quot; จะถูกจัดกลุ่มกับ &quot;Raisins&quot; ถ้าตารางการแปลงมีคอลัมน์ &quot;From&quot; ที่มี &quot;Grapes&quot; และคอลัมน์ &quot;To&quot; ที่มี &quot;Raisins&quot; โปรดทราบว่าการแปลงจะถูกนำไปใช้กับข้อความทั้งหมดในตารางการแปลง ด้วยตารางการแปลงข้างต้น &quot;Grapes are sweet&quot; จะถูกจัดกลุ่มกับ &quot;Raisins are sweet&quot;</li></ul><br />    


## Examples

### Example #1 
ค้นหาค่าตัวแทนสำหรับตำแหน่งที่ตั้งของพนักงาน
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
