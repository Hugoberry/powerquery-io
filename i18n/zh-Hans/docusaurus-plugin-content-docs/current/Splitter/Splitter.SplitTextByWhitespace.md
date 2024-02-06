---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


返回一个函数，它在空白处将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

返回一个函数，它在空白处将文本拆分为文本列表。


## Examples

### Example #1 
按空格字符拆分输入，将引号视为任何其他字符。
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
