---
title: Table.SelectColumns
---

# Table.SelectColumns


ส่งกลับตารางที่มีเฉพาะคอลัมน์ที่ระบุ


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

ส่งคืนค่า `table` โดยมีเฉพาะข้อมูลที่ระบุเท่านั้น `columns`

-   `table`: ตารางที่ให้มา
-   `columns`: รายการคอลัมน์จากตาราง `table` ที่จะส่งคืน คอลัมน์ในตารางที่ส่งคืนจะเรียงตามลำดับที่ระบุในรูปแบบ `columns`
-   `missingField`: *(ไม่บังคับ)* จะทำอย่างไรหากคอลัมน์นั้นไม่มีอยู่ ตัวอย่างเช่น: `MissingField.UseNull` หรือ `MissingField.Ignore`


## Examples

### Example #1
รวมเฉพาะคอลัมน์ \[Name\]
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
รวมเฉพาะคอลัมน์ \[CustomerID\] และ \[Name\]
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
ถ้าไม่มีคอลัมน์ที่รวมอยู่ ตัวเลือก `MissingField.UseNull` จะสร้างคอลัมน์ของค่า null
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
