---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


返回一个函数，它在每个指定的位置将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

返回一个函数，它在每个指定的位置将文本拆分为文本列表。


## Examples

### Example #1 
从输入开头开始，在指定位置拆分输入。
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
从输入结尾开始，在指定位置拆分输入。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
