---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


ส่งกลับฟังก์ชันที่รวมรายการข้อความโดยใช้ลำดับตัวคั่น


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่รวมรายการของค่าข้อความเป็นค่าข้อความเดียวโดยใช้ลำดับตัวคั่น


## Examples

### Example #1 
รวมรายการของค่าข้อความโดยใช้ลำดับตัวคั่น
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
