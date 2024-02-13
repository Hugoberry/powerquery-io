---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ตัวคั่นแต่ละตัวที่ระบุตามลำดับ


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ตัวคั่นแต่ละตัวที่ระบุตามลำดับ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าด้วยเครื่องหมายจุลภาค แล้วเครื่องหมายอัฒภาค เริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
แยกข้อมูลป้อนเข้าด้วยเครื่องหมายจุลภาค แล้วเครื่องหมายอัฒภาค โดยอ้างอิงเครื่องหมายอัญประกาศเหมือนกับอักขระอื่นๆ และเริ่มต้นจากจุดสิ้นสุดของอินพุต
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
