---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


ส่งกลับฟังก์ชันที่รวมรายการข้อความโดยใช้ตำแหน่งและความยาวที่ระบุ


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่รวมรายการของค่าข้อความเป็นค่าข้อความเดียวโดยใช้ตำแหน่งผลลัพธ์และความยาวที่ระบุ ความยาว Null ระบุว่าควรรวมค่าข้อความทั้งหมด


## Examples

### Example #1 
รวมรายการของค่าข้อความโดยใช้ตำแหน่งผลลัพธ์และความยาวที่ระบุ
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
