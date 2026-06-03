---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


สร้างสำเนาของแถวสำหรับแต่ละค่าในรายการ โดยกำหนดให้มีหนึ่งคอลัมน์ของหนึ่งรายการในตาราง


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

กําหนด `table` ที่ `column` ประกอบด้วยรายการของค่า แยกรายการเป็นแถวสําหรับแต่ละค่า ค่าในคอลัมน์อื่นจะถูกทําซ้ําในแต่ละแถวใหม่ที่สร้างขึ้น ฟังก์ชันนี้ยังสามารถขยายตารางที่ซ้อนกันโดยถือว่าเป็นรายการของระเบียน


## Examples

### Example #1
แยกคอลัมน์รายการ \[Name\]
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
แยกคอลัมน์ตารางที่ซ้อนกัน \[คอมโพเนนต์\]
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
