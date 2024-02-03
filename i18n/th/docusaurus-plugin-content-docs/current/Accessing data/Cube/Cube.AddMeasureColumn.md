---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

เพิ่มคอลัมน์ลงในคิวบ์ที่มีผลลัพธ์ของการวัดที่ใช้ในบริบทแถวของแต่ละแถว


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

เพิ่มคอลัมน์ที่มีชื่อว่า <code>column</code> ลงใน <code>cube</code> ที่มีผลลัพธ์ของการวัด <code>measureSelector</code> ที่ใช้ในบริบทแถวของแต่ละแถว การวัดจะได้รับผลกระทบจากการเปลี่ยนแปลงส่วนประกอบมิติและการแบ่งส่วน ค่าการวัดจะถูกปรับหลังจากการดำเนินการคิวบ์บางอย่างถูกดำเนินการ



## Category
Cube
