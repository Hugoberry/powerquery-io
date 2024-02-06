---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


指定された区切り記号を使用してテキストのリストに結合する関数を返します。


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

指定された区切り記号を使用してテキス値トのリストを 1 つのテキスト値に結合する関数を返します。


## Examples

### Example #1 
セミコロンの区切り記号を使用して、テキスト値の一覧を結合します。
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
コンマ区切り記号と CSV スタイルの引用符を使用して 2 つの列のテキストを結合します。
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
