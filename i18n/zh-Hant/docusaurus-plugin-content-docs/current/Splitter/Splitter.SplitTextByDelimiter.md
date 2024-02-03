---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

傳回函數，這個函數會根據指定的分隔符號，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

傳回函數，這個函數會根據指定的分隔符號，將文字分割成文字清單。


## Examples

### Example #1 
按逗號分割輸入，略過帶引號的逗號。
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
