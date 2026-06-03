---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


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


## Remarks

ทำซ้ำคอลัมน์ที่ชื่อ `columnName` ไปยังตาราง `table`. ค่าและชนิดสำหรับคอลัมน์ `newColumnName` จะถูกคัดลอกจากคอลัมน์ `columnName`


## Examples

### Example #1
ทำซ้ำคอลัมน์ "a" ไปยังคอลัมน์ที่ชื่อ "copied column" ในตาราง `({[a = 1, b = 2], [a = 3, b = 4]})`
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
