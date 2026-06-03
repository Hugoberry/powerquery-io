---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


จัดกลุ่มแถวในตารางตามการเทียบตรงคีย์แบบ Fuzzy


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

จัดกลุ่มแถว `table` โดยการเทียบตรงแบบ Fuzzy ในคอลัมน์ที่ระบุ `key` สำหรับแต่ละแถว สำหรับแต่ละกลุ่ม จะมีการสร้างระเบียนที่มีคอลัมน์คีย์ (และค่าของคอลัมน์) พร้อมกับคอลัมน์รวมใดๆ ที่ระบุโดย `aggregatedColumns` ฟังก์ชันนี้ไม่สามารถรับประกันได้ว่าจะส่งกลับลำดับแถวคงที่

ชุดตัวเลือกของ `options` อาจรวมอยู่ด้วยเพื่อระบุวิธีการเปรียบเทียบคอลัมน์คีย์ ตัวเลือกได้แก่:

-   `Culture` : อนุญาตให้จัดกลุ่มระเบียนตามกฎเฉพาะวัฒนธรรม โดยสามารถเป็นชื่อวัฒนธรรมที่ถูกต้องได้ ตัวอย่างเช่น ตัวเลือกวัฒนธรรม "ja-JP" จะจัดกลุ่มระเบียนตามวัฒนธรรมญี่ปุ่น โดยค่าเริ่มต้นคือ "" ซึ่งจัดกลุ่มตามวัฒนธรรมอังกฤษแบบคงที่
-   `IgnoreCase` : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการจัดกลุ่มคีย์แบบไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก ตัวอย่างเช่น เมื่อค่าเป็นจริง "Grapes" จะถูกจัดกลุ่มกับ "grapes" โดยค่าเริ่มต้นคือจริง
-   `IgnoreSpace` : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการรวมส่วนของข้อความเพื่อค้นหากลุ่ม ตัวอย่างเช่น เมื่อค่าเป็นจริง "Gra pes" จะถูกจัดกลุ่มกับ "Grapes" โดยค่าเริ่มต้นคือจริง
-   `SimilarityColumnName` : ชื่อสำหรับคอลัมน์ที่แสดงความคล้ายคลึงกันระหว่างค่าป้อนเข้าและค่าตัวแทนสำหรับข้อมูลป้อนเข้านั้น ค่าเริ่มต้นคือ null ซึ่งในกรณีนี้จะไม่มีการเพิ่มคอลัมน์ใหม่สำหรับความคล้ายคลึงกัน
-   `Threshold` : ตัวเลขระหว่าง 0.00 และ 1.00 ที่ระบุคะแนนความคล้ายคลึงกันที่ค่าสองค่าจะถูกจัดกลุ่ม ตัวอย่างเช่น "Grapes" และ "Graes" (ไม่มี "p") จะถูกจัดกลุ่มเข้าด้วยกันก็ต่อเมื่อตั้งค่าตัวเลือกนี้เป็นน้อยกว่า 0.90 ค่าเกณฑ์ 1.00 จะอนุญาตเฉพาะค่าที่ตรงกันทุกประการเท่านั้น (โปรดทราบว่า "ตรงกันทุกประการ" ที่ไม่ชัดเจนอาจละเว้นความแตกต่าง เช่น ตัวพิมพ์ ลําดับคํา และเครื่องหมายวรรคตอน) ค่าเริ่มต้นคือ 0.80
-   `TransformationTable` : ตารางที่อนุญาตให้จัดกลุ่มระเบียนตามการแมปค่าแบบกำหนดเอง ซึ่งควรมีคอลัมน์ "From" และ "To" ตัวอย่างเช่น "Grapes" จะถูกจัดกลุ่มกับ "Raisins" ถ้าตารางการแปลงมีคอลัมน์ "From" ที่มี "Grapes" และคอลัมน์ "To" ที่มี "Raisins" โปรดทราบว่าการแปลงจะถูกนำไปใช้กับข้อความทั้งหมดในตารางการแปลง ด้วยตารางการแปลงข้างต้น "Grapes are sweet" จะถูกจัดกลุ่มกับ "Raisins are sweet"


## Examples

### Example #1
จัดกลุ่มตารางโดยเพิ่มคอลัมน์การรวม \[Count\] ที่มีจํานวนพนักงานในแต่ละตําแหน่งที่ตั้ง (`each Table.RowCount(_)`)
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
