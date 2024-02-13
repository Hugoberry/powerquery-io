---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


ส่งกลับรูปแบบไบนารีที่จะแปลงค่าที่อ่านโดยค่าไบนารีอื่น


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

ส่งกลับรูปแบบไบนารีที่จะแปลงค่าที่อ่านโดยค่าไบนารีอื่น  พารามิเตอร์ <code>binaryFormat</code> จะระบุรูปแบบไบนารีที่จะถูกใช้เพื่ออ่านค่า  <code>function</code> จะถูกเรียกด้วยค่าที่ถูกอ่าน และส่งกลับค่าที่ถูกแปลง


## Examples

### Example #1 
อ่านไบต์และเพิ่มลงในพารามิเตอร์
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
