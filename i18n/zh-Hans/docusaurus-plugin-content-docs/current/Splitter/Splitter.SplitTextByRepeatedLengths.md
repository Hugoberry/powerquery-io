---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


返回一个函数，它在指定的长度后反复将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

返回一个函数，它在指定的长度后反复将文本拆分为文本列表。


## Examples

### Example #1 
从输入开头开始重复地将输入拆分为三个字符的区块。
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
从输入结尾开始，重复将输入拆分为三个字符的区块。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
