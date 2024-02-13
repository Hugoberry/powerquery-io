---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


指定された区切り記号に従ってテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

指定された区切り記号に従ってテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
引用符で囲まれたコンマは無視しながら、コンマで入力を分割します。
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
