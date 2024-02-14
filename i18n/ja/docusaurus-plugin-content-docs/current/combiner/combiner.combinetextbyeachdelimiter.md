---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


区切り記号のシーケンスを使用してテキストのリストを結合する関数を返します。


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

区切り記号のシーケンスを使用して、テキスト値のリストを 1 つのテキスト値に結合する関数を返します。


## Examples

### Example #1 
セミコロンの区切り記号を使用して、テキスト値のリストを結合します。
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
