---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


ส่งกลับฟังก์ชันที่รวมรายการข้อความโดยใช้ความยาวที่ระบุ


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่รวมรายการของค่าข้อความเป็นค่าข้อความเดียวโดยใช้ความยาวที่ระบุ


## Examples

### Example #1 
รวมรายการของค่าข้อความโดยการแยกจำนวนอักขระที่ระบุจากค่าที่ป้อนแต่ละค่า
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
รวมรายการของค่าข้อความโดยการแยกจำนวนอักขระที่ระบุ หลังจากเติมผลลัพธ์ล่วงหน้าด้วยข้อความเทมเพลต
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
