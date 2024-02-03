---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

รวมคอลัมน์ที่ระบุให้เป็นคอลัมน์ใหม่โดยใช้ฟังก์ชันตัวรวมที่ระบุ


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

รวมคอลัมน์ที่ระบุให้เป็นคอลัมน์ใหม่โดยใช้ฟังก์ชันตัวรวมที่ระบุ


## Examples

### Example #1 
รวมชื่อและนามสกุลลงในคอลัมน์ใหม่ โดยคั่นด้วยเครื่องหมายจุลภาค
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
