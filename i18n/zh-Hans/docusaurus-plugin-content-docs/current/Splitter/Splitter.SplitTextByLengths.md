---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


返回一个函数，它按每个指定的长度将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

返回一个函数，它按每个指定的长度将文本拆分为文本列表。


## Examples

### Example #1 
从输入开头开始，将输入拆分为前两个字符后跟接下来三个字符。
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
从输入结尾开始，将输入拆分为前两个字符后跟接下来三个字符。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
