---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


返回一个函数，它根据指定的分隔符将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

返回一个函数，它根据指定的分隔符将文本拆分为文本列表。


## Examples

### Example #1 
按逗号拆分输入，忽略带引号的逗号。
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
