---
title: List.Zip
---

# List.Zip


## Description

ส่งกลับรายการของรายการโดยการรวมข้อมูลที่อยู่ในตำแหน่งเดียวกันจากในหลาย ๆ รายการ


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

รับรายการของรายการ <code>lists</code> แล้วส่งกลับรายการของรายการที่รวมข้อมูลที่อยู่ในตำแหน่งเดียวกันไว้


## Examples

### Example #1 
Zip สองรายการแบบง่าย \{1, 2} และ \{3, 4}
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Zip สองรายการแบบง่ายที่มีความยาวแตกต่างกัน \{1, 2} และ \{3}
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
