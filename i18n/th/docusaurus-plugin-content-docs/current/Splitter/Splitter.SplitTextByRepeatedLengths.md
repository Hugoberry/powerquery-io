---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความหลังความยาวที่ระบุซ้ำ


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความหลังความยาวที่ระบุซ้ำ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าเป็นกลุ่มอักขระสามตัวซ้ำๆ โดยเริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
แยกข้อมูลป้อนเข้าเป็นกลุ่มอักขระสามตัวซ้ำๆ โดยเริ่มต้นจากจุดสิ้นสุดของข้อมูลป้อนเข้า
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
