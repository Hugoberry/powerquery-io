---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความตามความยาวแต่ละค่าที่ระบุ


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความตามความยาวแต่ละค่าที่ระบุ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าออกเป็นสองอักขระแรกตามด้วยสามตัวถัดไป โดยเริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
แยกข้อมูลป้อนเข้าออกเป็นอักขระสามตัวแรกตามด้วยอักขระสองตัวถัดไป โดยเริ่มจากจุดสิ้นสุดของข้อมูลป้อนเข้า
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
