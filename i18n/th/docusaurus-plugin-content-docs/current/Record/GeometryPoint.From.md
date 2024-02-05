---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

สร้างระเบียนที่แสดงจุดทางเรขาคณิตจากส่วนต่างๆ


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

สร้างระเบียนที่แสดงจุดทางเรขาคณิตจากส่วนประกอบต่างๆ เช่น พิกัด X พิกัด Y และพิกัด Z และการวัด (M) หากมี โดยสามารถกำหนดตัวระบุการอ้างอิงเชิงพื้นที่ (SRID) เพิ่มเติมได้หากแตกต่างจากค่าเริ่มต้น (0)



## Category
Record.Serialization
