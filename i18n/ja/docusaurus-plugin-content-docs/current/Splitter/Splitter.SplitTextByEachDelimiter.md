---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

指定された各区切り記号で順番にテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

指定された各区切り記号で順番にテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力の先頭から始め、入力をコンマで分割し、続けてセミコロンで分割します。
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
入力の末尾から始めて、入力をコンマで分割し、続いてセミコロンで分割し、引用符を他の文字と同じように扱ってください。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
