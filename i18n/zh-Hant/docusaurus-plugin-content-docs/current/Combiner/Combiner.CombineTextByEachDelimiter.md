---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

傳回函式，其會使用一連串分隔符號結合文字清單。


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

傳回函式，其會使用一連串分隔符號結合文字值清單為單一文字值。


## Examples

### Example #1 
使用一連串分隔符號結合文字值清單。
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
