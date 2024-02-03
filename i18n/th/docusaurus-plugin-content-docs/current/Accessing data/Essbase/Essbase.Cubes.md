---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

ส่งกลับคิวบ์ในอินสแตนซ์ Essbase ที่จัดกลุ่มตามเซิร์ฟเวอร์ Essbase


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางของคิวบ์ที่จัดกลุ่มโดยเซิร์ฟเวอร์ Essbase จากอินสแตนซ์ Essbase ที่เซิร์ฟเวอร์ APS <code>url</code> พารามิเตอร์ระเบียนทางเลือก <code>options</code> อาจถูกระบุเพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li></ul>



## Category
Accessing data
