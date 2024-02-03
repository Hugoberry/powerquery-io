---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

ส่งกลับความยาวโดยประมาณของไบนารี


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

ส่งกลับความยาวโดยประมาณของ <code>binary</code> หรือข้อผิดพลาด หากแหล่งข้อมูลไม่สนับสนุนความยาวโดยประมาณ


## Examples

### Example #1 
รับความยาวโดยประมาณของค่าไบนารี
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
