---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

指定された区切り記号でテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

指定された区切り記号でテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力の先頭から始め、入力をコンマまたはセミコロンで分割します。引用符と引用符で囲まれた区切り記号は無視します。
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
入力の末尾から始め、入力をコンマまたはセミコロンで分割します。引用符と引用符で囲まれた区切り記号は無視します。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
