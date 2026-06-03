---
title: Table.Profile
---

# Table.Profile


ส่งคืนโปรไฟล์คอลัมน์ของตาราง


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

ส่งคืนโปรไฟล์สำหรับคอลัมน์ใน `table`

มีการส่งคืนข้อมูลต่อไปนี้สำหรับแต่ละคอลัมน์ (หากสามารถใช้ได้)):

-   minimum
-   maximum
-   average
-   standard deviation
-   count
-   null count
-   distinct count



## Category
Table.Information
