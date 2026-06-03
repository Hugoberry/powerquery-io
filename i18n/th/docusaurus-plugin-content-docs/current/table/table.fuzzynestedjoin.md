---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


ดำเนินการรวม Fuzzy ระหว่างตารางบนคอลัมน์ที่ให้และสร้างผลลัพธ์การรวมในคอลัมน์ใหม่


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

รวมแถวของ `table1` กับแถวของ `table2` ตามการเทียบตรงแบบ Fuzzy ของค่าคอลัมน์หลักซึ่งเลือกโดย `key1` (สำหรับ `table1`) และ `key2` (สำหรับ `table2`) ผลลัพธ์จะถูกส่งกลับในคอลัมน์ใหม่ที่ชื่อ `newColumnName`

การเทียบตรงแบบ Fuzzy เป็นการเปรียบเทียบตามความคล้ายคลึงของข้อความมากกว่าความเท่ากันของข้อความ

`joinKind` ที่เลือกได้จะระบุชนิดของการรวมที่จะทำงาน ตามค่าเริ่มต้น การรวมภายนอกด้านซ้ายจะทำงานถ้าไม่มีการระบุ `joinKind` โดยตัวเลือกต่างๆ ประกอบด้วย:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

อาจรวมชุดตัวเลือกของ `joinOptions` เพื่อระบุวิธีการเปรียบเทียบคอลัมน์หลัก โดยตัวเลือกต่างๆ ประกอบด้วย:

-   `ConcurrentRequests` : ตัวเลขระหว่าง 1 และ 8 ที่ระบุจำนวนเธรดแบบขนานที่จะใช้สำหรับการเทียบตรงแบบ Fuzzy โดยค่าเริ่มต้นคือ 1
-   `Culture` : อนุญาตให้เทียบตรงระเบียนตามกฎเฉพาะวัฒนธรรม โดยสามารถเป็นชื่อวัฒนธรรมที่ถูกต้องได้ ตัวอย่างเช่น ตัวเลือกวัฒนธรรม "ja-JP" จะจับคู่ระเบียนตามวัฒนธรรมญี่ปุ่น โดยค่าเริ่มต้นคือ "" ซึ่งจับคู่ตามวัฒนธรรมอังกฤษแบบคงที่
-   `IgnoreCase` : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการเทียบตรงคีย์แบบไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก ตัวอย่างเช่น เมื่อค่าเป็นจริง "Grapes" จะถูกจับคู่กับ "grapes" โดยค่าเริ่มต้นคือจริง
-   `IgnoreSpace` : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการรวมส่วนของข้อความเพื่อค้นหารายการที่ตรงกัน ตัวอย่างเช่น เมื่อค่าเป็นจริง "Gra pes" จะตรงกับ "Grapes" โดยค่าเริ่มต้นคือจริง
-   `NumberOfMatches` : จำนวนเต็มที่ระบุจำนวนสูงสุดของแถวที่ตรงกันซึ่งสามารถส่งกลับได้สำหรับทุกแถวข้อมูลป้อนเข้า ตัวอย่างเช่น ค่า 1 จะส่งกลับแถวที่ตรงกันมากที่สุดหนึ่งแถวสำหรับแถวข้อมูลป้อนเข้าแต่ละแถว ถ้าไม่ได้ระบุตัวเลือกนี้ ระบบจะส่งกลับแถวที่ตรงกันทั้งหมด
-   `SimilarityColumnName` : ชื่อสำหรับคอลัมน์ที่แสดงความคล้ายคลึงกันระหว่างค่าป้อนเข้าและค่าตัวแทนสำหรับข้อมูลป้อนเข้านั้น ค่าเริ่มต้นคือ null ซึ่งในกรณีนี้จะไม่มีการเพิ่มคอลัมน์ใหม่สำหรับความคล้ายคลึงกัน
-   `Threshold` : ตัวเลขระหว่าง 0.00 และ 1.00 ที่ระบุคะแนนความคล้ายคลึงกันที่จะจับคู่ค่าสองค่า ตัวอย่างเช่น "Grapes" และ "Graes" (ไม่มี "p") จะตรงกันก็ต่อเมื่อตั้งค่าตัวเลือกนี้เป็นน้อยกว่า 0.90 ค่าเกณฑ์ 1.00 จะอนุญาตเฉพาะค่าที่ตรงกันทุกประการเท่านั้น (โปรดทราบว่า "ตรงกันทุกประการ" ที่ไม่ชัดเจนอาจละเว้นความแตกต่าง เช่น ตัวพิมพ์ ลําดับคํา และเครื่องหมายวรรคตอน) ค่าเริ่มต้นคือ 0.80
-   `TransformationTable` : ตารางที่อนุญาตให้เทียบตรงระเบียนตามการแมปค่าแบบกำหนดเอง ซึ่งควรมีคอลัมน์ "From" และ "To" ตัวอย่างเช่น "Grapes" จะตรงกับ "Raisins" ถ้าตารางการแปลงมีคอลัมน์ "From" ที่มี "Grapes" และคอลัมน์ "To" ที่มี "Raisins" โปรดทราบว่าการแปลงจะถูกนำไปใช้กับข้อความทั้งหมดในตารางการแปลง ด้วยตารางการแปลงข้างต้น "Grapes are sweet" จะตรงกับ "Raisins are sweet"


## Examples

### Example #1
การร่วม Fuzzy ภายในด้านซ้ายของสองตารางขึ้นอยู่กับ \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
