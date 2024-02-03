---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

空白文字でテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

空白文字でテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力を空白文字で分割し、引用符を他の文字と同じように扱います。
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
