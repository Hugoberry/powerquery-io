---
title: Binary.Buffer
---

# Binary.Buffer


## Description

บัฟเฟอร์ค่าไบนารีในหน่วยความจำ


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

บัฟเฟอร์ค่าไบนารีในหน่วยความจำ  ผลลัพธ์ของการเรียกนี้คือค่าไบนารีที่เสถียร ซึ่งหมายความว่าผลลัพธ์ดังกล่าวจะมีความยาวเชิงกำหนดและลำดับของไบต์


## Examples

### Example #1 
สร้างค่าไบนารีรุ่นที่เสถียร
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
