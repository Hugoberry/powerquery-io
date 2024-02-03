---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

傳回函數，這個函數會在空白字元處，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

傳回函數，這個函數會在空白字元處，將文字分割成文字清單。


## Examples

### Example #1 
以空格字元分割輸入，將引號與其他字元一樣處理。
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
