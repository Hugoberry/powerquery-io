---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

สร้างระเบียนที่แสดงจุดทางภูมิศาสตร์จากส่วนต่างๆ


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

สร้างระเบียนที่แสดงจุดทางภูมิศาสตร์จากส่วนประกอบต่างๆ เช่น ลองจิจูด ละติจูด การยกระดับ (Z) และการวัด (M) หากมี โดยสามารถกำหนดตัวระบุการอ้างอิงเชิงพื้นที่ (SRID) เพิ่มเติมได้หากแตกต่างจากค่าเริ่มต้น (4326)



## Category
Record.Serialization
