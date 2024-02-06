---
title: Table.Transpose
---

# Table.Transpose


เปลี่ยนคอลัมน์ให้เป็นแถวและเปลี่ยนแถวให้เป็นคอลัมน์


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

เปลี่ยนคอลัมน์ให้เป็นแถวและเปลี่ยนแถวให้เป็นคอลัมน์


## Examples

### Example #1 
เปลี่ยนแถวตารางของคู่ชื่อ-ค่าให้เป็นคอลัมน์
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
