---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

返回一个函数，它使用指定的分隔符将文本列表合并。


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

返回一个函数，它使用指定的分隔符将文本值列表合并成单个文本值。


## Examples

### Example #1 
使用分号分隔符合并文本值列表。
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
使用逗号分隔符和 CSV 样式引号合并两列文本。
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
