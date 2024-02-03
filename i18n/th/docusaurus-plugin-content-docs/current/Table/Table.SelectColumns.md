---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

ส่งกลับตารางที่มีเฉพาะคอลัมน์ที่ระบุ


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

ส่งกลับ <code>table</code> ที่มีเฉพาะ <code>columns</code> ที่ระบุ    <ul>       <li><code>table</code>: ตารางที่กำหนดให้</li>       <li><code>columns</code>: รายการคอลัมน์จากตาราง <code>table</code> ที่จะส่งกลับ คอลัมน์ในตารางที่ส่งกลับจะอยู่ในลำดับที่แสดงรายการใน <code>columns</code></li>       <li><code>missingField</code>: <i>(เลือกได้)</i> วิธีดำเนินการถ้าไม่มีคอลัมน์ดังกล่าวอยู่  ตัวอย่างเช่น: <code>MissingField.UseNull</code> หรือ <code>MissingField.Ignore</code>    </li></ul>


## Examples

### Example #1 
รวมเฉพาะคอลัมน์ [Name]
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
รวมเฉพาะคอลัมน์ [CustomerID] และ [Name]
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
ถ้าไม่มีคอลัมน์ที่รวมอยู่ ผลลัพธ์เริ่มต้นคือข้อผิดพลาด
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
ถ้าไม่มีคอลัมน์ที่รวมอยู่ ตัวเลือก &lt;code&gt;MissingField.UseNull&lt;/code&gt; จะสร้างคอลัมน์ของค่า null
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
