---
title: Table.RenameColumns
---

# Table.RenameColumns


นำการเปลี่ยนชื่อของฟอร์ม \{old, new} ไปใช้


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

ดำเนินการเปลี่ยนชื่อที่กำหนดให้กับคอลัมน์ในตาราง <code>table</code> การดำเนินการแทนที่ <code>renames</code> ประกอบด้วยรายการที่มีสองค่า ได้แก่ชื่อคอลัมน์เดิมและชื่อคอลัมน์ใหม่ที่ระบุไว้ในรายการ    ถ้าไม่มีคอลัมน์อยู่ ระบบจะแสดงข้อยกเว้น เว้นแต่พารามิเตอร์ที่เลือกได้ <code>missingField</code> จะระบุค่าสำรอง (เช่น <code>MissingField.UseNull</code> หรือ <code>MissingField.Ignore</code>)


## Examples

### Example #1 
แทนที่ชื่อคอลัมน์ &#34;CustomerNum&#34; ด้วย &#34;CustomerID&#34; ในตาราง
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
แทนที่ชื่อคอลัมน์ &#34;CustomerNum&#34; ด้วย &#34;CustomerID&#34; และ &#34;PhoneNum&#34; ด้วย &#34;Phone&#34; ในตาราง
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
แทนที่ชื่อคอลัมน์ &#34;NewCol&#34; ด้วย &#34;NewColumn&#34; ในตาราง และละเว้นหากไม่มีคอลัมน์อยู่
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
