---
title: Text.Middle
---

# Text.Middle


返回最长为某个特定长度的子字符串。


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

返回 `count` 个字符，或返回至 `text` 的结束；采用偏移 `start`。


## Examples

### Example #1
从文本 "Hello World" 中查找从索引 6 开始、跨 5 个字符的子字符串。
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
从文本 "Hello World" 中查找从索引 6 开始到结束的子字符串。
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
从文本 "Hello World" 中查找从索引 0 开始、跨 2 个字符的子字符串。
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
