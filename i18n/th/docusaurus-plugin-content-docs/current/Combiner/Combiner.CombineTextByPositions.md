---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


ส่งกลับฟังก์ชันที่รวมรายการข้อความโดยใช้ตำแหน่งผลลัพธ์ที่ระบุ


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่รวมรายการของค่าข้อความเป็นค่าข้อความเดียวโดยใช้ตำแหน่งผลลัพธ์ที่ระบุ


## Examples

### Example #1 
รวมรายการของค่าข้อความโดยวางในผลลัพธ์ในตำแหน่งที่ระบุ
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
