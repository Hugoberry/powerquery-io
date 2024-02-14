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

ส่งคืนโปรไฟล์สำหรับคอลัมน์ใน <code>table</code><br />มีการส่งคืนข้อมูลต่อไปนี้สำหรับแต่ละคอลัมน์ (หากสามารถใช้ได้)):<ul>  <li>minimum</li>  <li>maximum</li>  <li>average</li>  <li>standard deviation</li>  <li>count</li>  <li>null count</li>  <li>distinct count</li></ul><br />



## Category
Table.Information
