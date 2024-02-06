---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


返回一个函数，它使用分隔符的顺序将文本列表合并。


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

返回一个函数，它使用分隔符的顺序将文本值列表合并成单个文本值。


## Examples

### Example #1 
使用分隔符的顺序合并文本值列表。
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
