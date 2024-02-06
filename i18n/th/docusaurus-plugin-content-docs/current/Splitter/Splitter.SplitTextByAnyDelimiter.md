---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ตัวคั่นใดๆ ที่ระบุ


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความที่ตัวคั่นใดๆ ที่ระบุ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าด้วยเครื่องหมายจุลภาคหรือเครื่องหมายอัฒภาค โดยละเว้นเครื่องหมายอัญประกาศและตัวคั่นที่อ้างอิง และเริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
แยกข้อมูลป้อนเข้าด้วยเครื่องหมายจุลภาคหรือเครื่องหมายอัฒภาค โดยละเว้นเครื่องหมายอัญประกาศและตัวคั่นที่อ้างอิง และเริ่มต้นจากจุดสิ้นสุดของข้อมูลป้อนเข้า
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
