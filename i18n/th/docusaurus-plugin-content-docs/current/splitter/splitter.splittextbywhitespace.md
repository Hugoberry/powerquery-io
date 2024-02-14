---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ช่องว่าง


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ช่องว่าง


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าด้วยอักขระช่องว่าง โดยถือว่าเครื่องหมายอัญประกาศเหมือนกับอักขระอื่นๆ
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
