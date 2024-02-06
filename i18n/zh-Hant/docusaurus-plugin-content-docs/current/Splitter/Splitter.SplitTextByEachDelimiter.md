---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


傳回函數，這個函數會依序在每個指定的分隔符號處，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

傳回函數，這個函數會依序在每個指定的分隔符號處，將文字分割成文字清單。


## Examples

### Example #1 
從輸入的開頭開始，先用逗號，然後用分號分割輸入。
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
先用逗號，然後用分號分割輸入，將引號與其他字元一樣處理，並從輸入的結尾開始。
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
