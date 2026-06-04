---
title: List.FindText
---

# List.FindText


返回包含指定文本的值(包括记录字段)列表。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

从包含值 `text` 的列表 `list` 返回值列表。


## Examples

### Example #1
在列表 \{"a", "b", "ab"\} 中查找匹配 "a" 的文本值。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
