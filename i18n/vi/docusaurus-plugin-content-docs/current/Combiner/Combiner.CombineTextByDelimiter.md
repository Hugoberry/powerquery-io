---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Trả về một hàm kết hợp một danh sách văn bản bằng cách sử dụng dấu tách được chỉ định.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Trả về một hàm kết hợp một danh sách giá trị văn bản thành một giá trị văn bản đơn bằng cách sử dụng dấu tách được chỉ định.


## Examples

### Example #1 
Liệt kê các giá trị văn bản và dùng dấu chấm phẩy để phân tách.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Kết hợp văn bản của hai cột bằng dấu tách dấu phẩy và trích dẫn kiểu CSV.
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
