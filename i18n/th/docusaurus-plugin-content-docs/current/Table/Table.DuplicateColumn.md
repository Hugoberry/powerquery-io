---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

ทำซ้ำคอลัมน์ซึ่งมีชื่อที่ระบุ ค่าและชนิดจะถูกคัดลอกจากคอลัมน์ต้นทาง


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Details

ทำซ้ำคอลัมน์ที่ชื่อ <code>columnName</code> ไปยังตาราง <code>table</code> ค่าและชนิดสำหรับคอลัมน์ <code>newColumnName</code> จะถูกคัดลอกจากคอลัมน์ <code>columnName</code>


## Examples

### Example #1 
ทำซ้ำคอลัมน์ &#34;a&#34; ไปยังคอลัมน์ที่ชื่อ &#34;copied column&#34; ในตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
