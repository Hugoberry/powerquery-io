---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

返回一个函数，它根据指定的偏移量和长度将文本拆分为文本列表。


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

返回一个函数，该函数根据指定的偏移量和长度将文本拆分为文本列表。null 长度指示所有剩余输入都应被包括。


## Examples

### Example #1 
从输入开头开始按指定的位置和长度对拆分输入。请注意，此示例中的范围重叠。
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
从输入的结尾开始按指定的位置和长度对拆分输入。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
将输入拆分为定长的邮政编码，后跟可变长度的城市名称。
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
