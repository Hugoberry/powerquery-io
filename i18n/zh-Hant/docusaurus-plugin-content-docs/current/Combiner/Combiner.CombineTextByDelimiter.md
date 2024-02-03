---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

傳回函式，其會使用指定的分隔符號結合文字清單。


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

傳回函數，此函數會使用指定的分隔符號將文字值清單結合成為單一文字值。


## Examples

### Example #1 
使用分號分隔符號合併文字值清單。
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
使用逗號分隔符號和 CSV 樣式引號將兩個資料行的文字合併。
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
