---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


ส่งกลับฟังก์ชันที่รวมรายการข้อความโดยใช้ตัวคั่นที่ระบุ


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่รวมรายการของค่าข้อความเป็นค่าข้อความเดียวโดยใช้ตัวคั่นที่ระบุ


## Examples

### Example #1 
รวมรายการค่าข้อความโดยใช้ตัวคั่นเครื่องหมายอัฒภาค
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
รวมข้อความของสองคอลัมน์โดยใช้ตัวคั่นเครื่องหมายจุลภาคและตัวคั่นแบบ CSV
```powerquery
let
    Source = #table(
        type table [Column1 = text, Column2 = text],
        {{"a", "b"}, {"c", "d,e,f"}}
    ),
    Merged = Table.CombineColumns(
        Source,
        {"Column1", "Column2"},
        Combiner.CombineTextByDelimiter(",", QuoteStyle.Csv),
        "Merged"
    )
in
    Merged
```

Result: 
```powerquery
#table(
    type table [Merged = text],
    {{"a,b"}, {"c,""d,e,f"""}}
)
```




## Category
Combiner
