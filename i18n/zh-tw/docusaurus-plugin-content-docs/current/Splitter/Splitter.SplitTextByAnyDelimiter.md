---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

傳回函數，這個函數會在任何指定的分隔符號處，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

傳回函數，這個函數會在任何指定的分隔符號處，將文字分割成文字清單。


## Examples

### Example #1 
以逗號或分號分割輸入，略過引號和帶引號的分隔符號，並從輸入的開頭開始。
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
以逗號或分號分割輸入，略過引號和帶引號的分隔符號，並從輸入結尾開始。
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
