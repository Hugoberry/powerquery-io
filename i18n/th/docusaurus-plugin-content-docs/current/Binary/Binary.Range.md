---
title: Binary.Range
---

# Binary.Range


## Description

ส่งกลับชุดย่อยของค่าไบนารีที่เริ่มต้นที่ออฟเซต


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

ส่งกลับชุดย่อยของค่าไบนารีที่เริ่มต้นที่ออฟเซต <code>binary</code> พารามิเตอร์ <code>offset</code> ที่เลือกได้จะกำหนดความยาวสูงสุดของชุดย่อย


## Examples

### Example #1 
ส่งกลับชุดย่อยของค่าไบนารีที่เริ่มต้นที่ออฟเซต 6
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
ส่งกลับชุดย่อยของความยาว 2 จากออฟเซต 6 ของค่าไบนารี
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
