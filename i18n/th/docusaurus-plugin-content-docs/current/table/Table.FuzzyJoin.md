---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


รวมแถวจากสองตารางที่ Fuzzy ตรงกันตามคีย์ที่กำหนด


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

รวมแถวของ <code>table1</code> กับแถวของ <code>table2</code> ตามการเทียบตรงแบบ Fuzzy ของค่าคอลัมน์หลักที่เลือกโดย <code>key1</code> (สำหรับ <code>table1</code>) และ <code>key2</code> (สำหรับ <code>table2</code>)<br />การเทียบตรงแบบ Fuzzy เป็นการเปรียบเทียบตามความคล้ายคลึงของข้อความมากกว่าความเท่ากันของข้อความ<br />ตามค่าเริ่มต้น การรวมภายในจะทำงาน อย่างไรก็ตาม สามารถเลือกที่จะรวม <code>joinKind</code> เพื่อระบุถึงชนิดการรวม โดยตัวเลือกต่างๆ ประกอบด้วย:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />อาจรวมชุดตัวเลือกของ <code>joinOptions</code> เพื่อระบุวิธีการเปรียบเทียบคอลัมน์หลัก โดยตัวเลือกต่างๆ ประกอบด้วย:    <ul><li><code>ConcurrentRequests</code> : ตัวเลขระหว่าง 1 และ 8 ที่ระบุจำนวนเธรดแบบขนานที่จะใช้สำหรับการเทียบตรงแบบ Fuzzy โดยค่าเริ่มต้นคือ 1</li><li><code>Culture</code> : อนุญาตให้เทียบตรงระเบียนตามกฎเฉพาะวัฒนธรรม โดยสามารถเป็นชื่อวัฒนธรรมที่ถูกต้องได้ ตัวอย่างเช่น ตัวเลือกวัฒนธรรม &quot;ja-JP&quot; จะจับคู่ระเบียนตามวัฒนธรรมญี่ปุ่น โดยค่าเริ่มต้นคือ &quot;&quot; ซึ่งจับคู่ตามวัฒนธรรมอังกฤษแบบคงที่</li><li><code>IgnoreCase</code> : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการเทียบตรงคีย์แบบไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก ตัวอย่างเช่น เมื่อค่าเป็นจริง &quot;Grapes&quot; จะถูกจับคู่กับ &quot;grapes&quot; โดยค่าเริ่มต้นคือจริง</li><li><code>IgnoreSpace</code> : ค่าตรรกะ (จริง/เท็จ) ที่อนุญาตให้มีการรวมส่วนของข้อความเพื่อค้นหารายการที่ตรงกัน ตัวอย่างเช่น เมื่อค่าเป็นจริง &quot;Gra pes&quot; จะตรงกับ &quot;Grapes&quot; โดยค่าเริ่มต้นคือจริง</li><li><code>NumberOfMatches</code> : จำนวนเต็มที่ระบุจำนวนสูงสุดของแถวที่ตรงกันซึ่งสามารถส่งกลับได้สำหรับทุกแถวข้อมูลป้อนเข้า ตัวอย่างเช่น ค่า 1 จะส่งกลับแถวที่ตรงกันมากที่สุดหนึ่งแถวสำหรับแถวข้อมูลป้อนเข้าแต่ละแถว ถ้าไม่ได้ระบุตัวเลือกนี้ ระบบจะส่งกลับแถวที่ตรงกันทั้งหมด</li><li><code>SimilarityColumnName</code> : ชื่อสำหรับคอลัมน์ที่แสดงความคล้ายคลึงกันระหว่างค่าป้อนเข้าและค่าตัวแทนสำหรับข้อมูลป้อนเข้านั้น ค่าเริ่มต้นคือ null ซึ่งในกรณีนี้จะไม่มีการเพิ่มคอลัมน์ใหม่สำหรับความคล้ายคลึงกัน</li><li><code>Threshold</code> : ตัวเลขระหว่าง 0.00 และ 1.00 ที่ระบุคะแนนความคล้ายคลึงกันที่จะจับคู่ค่าสองค่า    ตัวอย่างเช่น &quot;Grapes&quot; และ &quot;Graes&quot; (ไม่มี &quot;p&quot;) จะตรงกันก็ต่อเมื่อตั้งค่าตัวเลือกนี้เป็นน้อยกว่า 0.90    ค่าเกณฑ์ 1.00 จะอนุญาตเฉพาะค่าที่ตรงกันทุกประการเท่านั้น    (โปรดทราบว่า &quot;ตรงกันทุกประการ&quot; ที่ไม่ชัดเจนอาจละเว้นความแตกต่าง เช่น ตัวพิมพ์ ลําดับคํา และเครื่องหมายวรรคตอน)    ค่าเริ่มต้นคือ 0.80</li><li><code>TransformationTable</code> : ตารางที่อนุญาตให้เทียบตรงระเบียนตามการแมปค่าแบบกำหนดเอง ซึ่งควรมีคอลัมน์ &quot;From&quot; และ &quot;To&quot; ตัวอย่างเช่น &quot;Grapes&quot; จะตรงกับ &quot;Raisins&quot; ถ้าตารางการแปลงมีคอลัมน์ &quot;From&quot; ที่มี &quot;Grapes&quot; และคอลัมน์ &quot;To&quot; ที่มี &quot;Raisins&quot; โปรดทราบว่าการแปลงจะถูกนำไปใช้กับข้อความทั้งหมดในตารางการแปลง ด้วยตารางการแปลงข้างต้น &quot;Grapes are sweet&quot; จะตรงกับ &quot;Raisins are sweet&quot;</li></ul><br />    


## Examples

### Example #1 
การร่วม Fuzzy ภายในด้านซ้ายของสองตารางขึ้นอยู่กับ [FirstName]
```powerquery
Table.FuzzyJoin(
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
			  CustomerStateID = 1,
			  FirstName2 = "Bob",
			  State = "TX"
		],
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 2,
			  FirstName2 = "bOB",
			  State = "CA"
		],
    [
			  CustomerID = 2,
			  FirstName1 = "Robert",
			  Phone = "555-4567",
			  CustomerStateID = null,
			  FirstName2 = null,
			  State = null
		]
})
```




## Category
Table.Transformation
