---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


แปลงชื่อคอลัมน์โดยใช้ฟังก์ชันที่กำหนดไว้


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

แปลงชื่อคอลัมน์โดยใช้ฟังก์ชัน <code>nameGenerator</code> ที่กำหนดไว้ ตัวเลือกที่ใช้ได้:    <div>      <code>MaxLength</code> ความยาวสูงสุดของชื่อคอลัมน์ใหม่ หากฟังก์ชันที่กำหนดไว้ให้ผลลัพธ์เป็นชื่อคอลัมน์ที่ยาวกว่า ชื่อนั้นจะถูกตัดทอนให้สั้นลง    </div>    <div>      <code>ตัวเปรียบเทียบ</code> ใช้เพื่อควบคุมการเปรียบเทียบขณะที่สร้างชื่อคอลัมน์ใหม่ ตัวเปรียบเทียบอาจใช้เพื่อให้การเปรียบเทียมแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือการรับรู้ภาษา    </div>    <div>     รุ่นต่อไปนี้ในตัวเปรียบเทียบจะมีในภาษาของสูตร:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: ใช้เพื่อดำเนินการเปรียบเทียบลำดับที่แน่นอน</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: ใช้เพื่อดำเนินการเปรียบเทียบลำดับที่แน่นอนแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่เล็ก</li>      <li> <code>Comparer.FromCulture</code>: ใช้เพื่อดำเนินการเปรียบเทียบตามการรับรู้ภาษา</li>    </ul>    


## Examples

### Example #1 
นำตัวอักขระ &lt;code&gt;#(tab)&lt;/code&gt; ออกจากชื่อคอลัมน์
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
แปลงชื่อคอลัมน์เพื่อสร้างชื่อที่ไม่ไม่เทียบตรงตามตัวพิมพ์ใหญ่เล็กมีความยาว 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
