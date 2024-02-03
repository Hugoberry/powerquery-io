---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

ขยายคอลัมน์ของระเบียนไปยังคอลัมน์ที่มีค่าแต่ละค่า


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

สร้างตารางที่มีหนึ่งคอลัมน์สำหรับแต่ละเขตข้อมูลในระเบียน โดยกำหนดให้มี <code>column</code> ของระเบียนในค่าที่ป้อน <code>table</code> หรืออาจเลือกระบุ <code>newColumnNames</code> เพื่อให้แน่ใจว่าคอลัมน์ในตารางใหม่จะมีชื่อที่ไม่ซ้ำกัน    <ul>        <li><code>table</code>: ตารางเดิมซึ่งมีคอลัมน์ระเบียนที่จะขยาย </li>        <li><code>column</code>: คอลัมน์ที่จะขยาย</li>        <li><code>fieldNames</code>: รายการเขตข้อมูลที่จะขยายไปยังคอลัมน์ในตาราง</li>        <li><code>newColumnNames</code>: รายการชื่อคอลัมน์ที่จะให้คอลัมน์ใหม่ ชื่อคอลัมน์ใหม่ต้องไม่ซ้ำกับคอลัมน์ใดๆ ในตารางใหม่</li>    </ul>


## Examples

### Example #1 
ขยายคอลัมน์ [a] ในตาราง &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; ไปยัง 3 คอลัมน์ &#34;aa&#34;, &#34;bb&#34; และ &#34;cc&#34;
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
