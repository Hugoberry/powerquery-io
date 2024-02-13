---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความตามตัวคั่นที่ระบุ


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความตามตัวคั่นที่ระบุ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าด้วยเครื่องหมายจุลภาค โดยละเว้นเครื่องหมายจุลภาคอ้างอิง
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
