---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


ลดระดับส่วนหัวของคอลัมน์ลงเป็นแถวแรกของค่า


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

ลดระดับส่วนหัวของคอลัมน์ (เช่น ชื่อคอลัมน์) ลงเป็นแถวแรกของค่า ชื่อคอลัมน์เริ่มต้นได้แก่ "Column1", "Column2" เป็นต้น


## Examples

### Example #1 
ลดระดับแถวแรกของค่าในตาราง
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
